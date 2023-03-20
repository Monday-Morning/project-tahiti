import React, { useEffect, useState } from 'react';

import { getAnalytics, isSupported } from 'firebase/analytics';
//firebase
import {
  EmailAuthProvider,
  getAdditionalUserInfo,
  getIdToken,
  GoogleAuthProvider,
  isSignInWithEmailLink,
  linkWithCredential,
  onIdTokenChanged,
  sendSignInLinkToEmail,
  signInWithCredential,
} from 'firebase/auth';
import { setCookie } from 'nookies';

//graphql
import { getApolloLink, GraphClient } from '../../config/ApolloClient';
import { auth, firebaseApp } from '../../config/firebase';
import imagekit from '../../config/imagekit';
import addNITRMail from '../../graphql/mutations/user/addNITRMail';
import registerUser from '../../graphql/mutations/user/registerUser';
import updateUserProfilePicture from '../../graphql/mutations/user/updateUserProfilePicture';
import checkNITRMail from '../../graphql/queries/user/checkNITRMail';
import getFirebaseUserByEmail from '../../graphql/queries/user/getFirebaseUserByEmail';
//context
import authContext from './AuthContext';

const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);

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

    GraphClient.setLink(
      getApolloLink(user?.firebaseToken ?? user?.accessToken),
    );
    setCookie(null, 'firebaseToken', user?.firebaseToken ?? user?.accessToken, {
      secure: true,
      sameSite: true,
      maxAge: 3600,
    });
  }, [user]);

  const loginWithToken = async (_token) => {
    try {
      const credential = GoogleAuthProvider.credential(_token);

      const res = await signInWithCredential(auth, credential);

      const { user: _user } = res;

      const _firebaseToken = await getIdToken(_user, false);
      GraphClient.setLink(getApolloLink(_firebaseToken));

      setUser((_u) => ({
        ..._user,
        firebaseToken: _firebaseToken,
        refreshToken: _user.refreshToken,
      }));

      if (!getAdditionalUserInfo(res).isNewUser) {
        const {
          data: { getFirebaseUserByEmail: _fbUser },
        } = await GraphClient.query({
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

      const newAccount = await GraphClient.mutate({
        mutation: registerUser,
        variables: {
          fullName: _user.displayName,
          email: _user.email,
        },
      });

      if (!newAccount?.data?.registerUser) {
        throw new Error('Error Registering User');
      }

      const _refreshedFirebaseToken = await getIdToken(_user, true);
      GraphClient.setLink(getApolloLink(_refreshedFirebaseToken));

      setUser((_u) => ({
        ..._user,
        ...(_u ?? {}),
        firebaseToken: _firebaseToken,
        refreshToken: _user.refreshToken,
        mid: newAccount.data.registerUser.id,
      }));

      if (newAccount.data.registerUser.accountType === 2) {
        return {
          isNewUser: true,
          isMigratedUser: true,
          user: user,
          newAccount: { ...newAccount },
        };
      }

      let imageUpload = {
        filePath: '/user/default.png',
      };

      try {
        const userPicture = await (await fetch(_user.photoURL)).blob();

        if (!['image/png', 'image/jpeg'].includes(userPicture.type)) {
          throw new Error('Invalid Image Type');
        }

        imageUpload = await imagekit
          .upload({
            file: _user.photoURL,
            useUniqueFileName: false,
            folder: '/user',
            fileName: `${newAccount.data.registerUser.id}.${
              userPicture.type.toString().split('/')[1]
            }`,
            tags: [_user.uid, 'user', 'profilePicture'],
          })
          .then((result) => {
            return result;
          });
      } catch (error) {
        console.log(error);
      }

      const _imageUpdateResponse = await GraphClient.mutate({
        mutation: updateUserProfilePicture,
        variables: {
          id: newAccount.data.registerUser.id,
          storePath: imageUpload.filePath,
        },
      });

      return {
        isNewUser: true,
        user: user,
        newAccount: { ...newAccount, ..._imageUpdateResponse },
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
      const actionCodeSettings = {
        url: `${
          process.env.NODE_ENV !== 'production'
            ? window.location.origin
            : 'https://mondaymorning.nitrkl.ac.in'
        }/onboarding?stage=VERIFY_EMAIL&email=${email}&isEmailLink=true`,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      return true;
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const _isSignInWithEmailLink = (href) => isSignInWithEmailLink(auth, href);

  const attachNITREmail = async (nitrMail, href) => {
    try {
      const credential = EmailAuthProvider.credentialWithLink(nitrMail, href);
      const userCredential = await linkWithCredential(
        auth.currentUser,
        credential,
      );

      const _user = await GraphClient.mutate({
        mutation: addNITRMail,
        variables: {
          email: user.email,
          nitrMail,
        },
      });

      // await getIdToken(auth.currentUser, true);

      return { userCredential, user: _user };
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  const checkNITREmail = async (email) => {
    try {
      const { data } = await GraphClient.query({
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
        user: user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
