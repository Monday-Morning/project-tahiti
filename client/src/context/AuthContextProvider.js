import React, { createContext, useEffect, useState } from 'react';

import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getIdToken,
  isSignInWithEmailLink,
  linkWithCredential,
  onIdTokenChanged,
  sendSignInLinkToEmail,
  signInWithCredential,
} from 'firebase/auth';
import { destroyCookie, setCookie } from 'nookies';
import checkNITRMail from '../graphql/queries/user/checkNITRMail';
import { auth, firebaseApp } from '../config/firebase';
import imagekit from '../config/imagekit';
import addNITRMail from '../graphql/mutations/user/addNITRMail';
import registerUser from '../graphql/mutations/user/registerUser';
import updateUserProfilePicture from '../graphql/mutations/user/updateUserProfilePicture';
import getFirebaseUserByEmail from '../graphql/queries/user/getFirebaseUserByEmail';
import { getApolloLink, getGraphClient } from './ApolloContextProvider';

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const graphClient = getGraphClient(false, user?.firebaseToken);

  useEffect(() => {
    if (isSupported() && process.env.NODE_ENV === 'production') {
      getAnalytics(firebaseApp);
    }
    if (auth) {
      onIdTokenChanged(auth, async (_user) => {
        console.log('onIdTokenChanged', _user);

        if (!_user) {
          setUser(null);
          return;
        }

        const firebaseToken = await getIdToken(_user, false);

        setUser((_u) => ({
          ...(user ?? {}),
          ...(_u ?? {}),
          ..._user,
          firebaseToken,
        }));
      });
    }
  }, []);

  useEffect(() => {
    console.log('user', user);

    graphClient.setLink(
      getApolloLink(false, user?.firebaseToken ?? user?.accessToken),
    );

    if (user?.firebaseToken || user?.accessToken) {
      setCookie(
        null,
        'firebaseToken',
        user?.firebaseToken ?? user?.accessToken,
        {
          secure: true,
          sameSite: true,
          maxAge: 3600,
        },
      );
    } else {
      destroyCookie(null, 'firebaseToken');
    }
  }, [user]);

  const loginWithToken = async (_token) => {
    try {
      const _credential = GoogleAuthProvider.credential(_token);

      const res = await signInWithCredential(auth, _credential);

      const { user: _user } = res;

      const _firebaseToken = await getIdToken(_user, false);
      graphClient.setLink(getApolloLink(false, _firebaseToken));

      setUser((_u) => ({
        ..._user,
        firebaseToken: _firebaseToken,
        refreshToken: _user.refreshToken,
      }));

      if (!getAdditionalUserInfo(res).isNewUser) {
        const {
          data: { getFirebaseUserByEmail: _fbUser },
        } = await graphClient.query({
          query: getFirebaseUserByEmail,
          variables: {
            email: _user.email,
          },
        });

        setUser((_u) => ({
          ..._user,
          firebaseToken: _firebaseToken,
          refreshToken: _user.refreshToken,
          mid: _fbUser?.customClaims?.mid,
          roles: _fbUser?.customClaims?.roles,
        }));

        return {
          isNewUser: false,
          user: {
            ..._user,
            firebaseToken: _firebaseToken,
            refreshToken: _user.refreshToken,
            mid: _fbUser?.customClaims?.mid,
            roles: _fbUser?.customClaims?.roles,
          },
        };
      }

      const _newAccount = await graphClient.mutate({
        mutation: registerUser,
        variables: {
          fullName: _user.displayName,
          email: _user.email,
        },
      });

      if (!_newAccount?.data?.registerUser) {
        throw new Error('Error Registering User');
      }

      const _refreshedFirebaseToken = await getIdToken(_user, true);
      graphClient.setLink(getApolloLink(false, _refreshedFirebaseToken));

      setUser((_u) => ({
        ..._user,
        ...(_u ?? {}),
        firebaseToken: _firebaseToken,
        refreshToken: _user.refreshToken,
        mid: _newAccount.data.registerUser.id,
      }));

      if (_newAccount.data.registerUser.accountType === 2) {
        return {
          isNewUser: true,
          isMigratedUser: true,
          user: user,
          newAccount: { ..._newAccount },
        };
      }

      let _imageUpload = {
        filePath: '/user/default.png',
      };

      try {
        const _userPicture = await (await fetch(_user.photoURL)).blob();

        if (!['image/png', 'image/jpeg'].includes(_userPicture.type)) {
          throw new Error('Invalid Image Type');
        }

        _imageUpload = await imagekit
          .upload({
            file: _user.photoURL,
            useUniqueFileName: false,
            folder: '/user',
            fileName: `${_newAccount.data.registerUser.id}.${
              _userPicture.type.toString().split('/')[1]
            }`,
            tags: [_user.uid, 'user', 'profilePicture'],
          })
          .then((result) => {
            return result;
          });
      } catch (error) {
        console.log(error);
      }

      const _imageUpdateResponse = await graphClient.mutate({
        mutation: updateUserProfilePicture,
        variables: {
          id: _newAccount.data.registerUser.id,
          storePath: _imageUpload.filePath,
        },
      });

      return {
        isNewUser: true,
        user: user,
        newAccount: { ..._newAccount, ..._imageUpdateResponse },
      };
    } catch (error) {
      return {
        isNewUser: user?.isNewUser ?? false,
        error,
      };
    }
  };

  const sendEmailLink = async (email) => {
    try {
      const _actionCodeSettings = {
        url: `${
          process.env.NODE_ENV === 'production'
            ? 'https://mondaymorning.nitrkl.ac.in'
            : window.location.origin
        }/onboarding?stage=VERIFY_EMAIL&email=${email}&isEmailLink=true`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, _actionCodeSettings);
      return true;
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const _isSignInWithEmailLink = (href) => isSignInWithEmailLink(auth, href);

  const attachNITREmail = async (nitrMail, href) => {
    try {
      const _credential = EmailAuthProvider.credentialWithLink(nitrMail, href);
      const _userCredential = await linkWithCredential(
        auth.currentUser,
        _credential,
      );

      const _user = await graphClient.mutate({
        mutation: addNITRMail,
        variables: {
          email: user.email,
          nitrMail,
        },
      });

      // await getIdToken(auth.currentUser, true);

      return { userCredential: _userCredential, user: _user };
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const checkNITREmail = async (email) => {
    try {
      const { data } = await graphClient.query({
        query: checkNITRMail,
        variables: {
          nitrMail: email,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <authContext.Provider
      value={{
        loginWithToken,
        sendEmailLink,
        isSignInWithEmailLink: _isSignInWithEmailLink,
        attachNITREmail,
        checkNITREmail,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
