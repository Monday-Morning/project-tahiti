import React, { useState, useEffect } from 'react';

//context
import authContext from './AuthContext';

//firebase
import {
  GoogleAuthProvider,
  signInWithCredential,
  getIdToken,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { auth, firebaseApp } from '../../config/firebase';

//graphql
import { getApolloLink, GraphClient } from '../../config/ApolloClient';
import registerUser from '../../graphql/mutations/user/registerUser';
import updateUserProfilePicture from '../../graphql/mutations/user/updateUserProfilePicture';
import getFirebaseUserByEmail from '../../graphql/queries/user/getFirebaseUserByEmail';

import ImageKit from 'imagekit-javascript';
import { setCookie } from 'nookies';

const AuthState = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState('');
  const [user, setUser] = useState(null);
  const [firebaseToken, setFirebaseToken] = useState('');
  const [mid, setMid] = useState('');

  useEffect(() => {
    if (isSupported() && process.env.NODE_ENV === 'production') {
      getAnalytics(firebaseApp);
    }
    if (auth) {
      onAuthStateChanged(auth, async (_user) => {
        setUser(_user);
        if (_user) setFirebaseToken(await getIdToken(_user, false));
      });
    }
  }, []);

  useEffect(() => {
    GraphClient.setLink(getApolloLink(firebaseToken));
    setCookie(null, 'firebaseToken', firebaseToken, {
      secure: true,
      sameSite: true,
      maxAge: 3600,
    });
  }, [user, firebaseToken, refreshToken]);

  const loginWithToken = async (_token) => {
    const credential = GoogleAuthProvider.credential(_token);

    const res = await signInWithCredential(auth, credential);

    const { user, _tokenResponse } = res;

    try {
      const { data } = await GraphClient.query({
        query: getFirebaseUserByEmail,
        variables: {
          email: user.email,
        },
      });
      if (data.getFirebaseUserByEmail) {
        setMid(data.getFirebaseUserByEmail.customClaims.mid);
      }
    } catch (err) {
      console.log(err);
    }
    GraphClient.setLink(getApolloLink(user.accessToken));
    setFirebaseToken(user.accessToken);
    setRefreshToken(user.refreshToken);
    setUser(user);

    if (getAdditionalUserInfo(res).isNewUser) {
      try {
        const imagekit = new ImageKit({
          publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
          urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT,
          authenticationEndpoint: `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}${process.env.NEXT_PUBLIC_IMAGEKIT_AUTHENTICATION_ENDPOINT}`,
        });

        const newAccount = await GraphClient.mutate({
          mutation: registerUser,
          variables: {
            fullName: user.displayName,
            email: user.email,
          },
        });
        setMid(newAccount.data.registerUser.id);

        const newToken = await auth.currentUser.getIdToken({
          forceRefresh: true,
        });
        setFirebaseToken(newToken);

        const userPicture = await (await fetch(user.photoURL)).blob();

        if (!['image/png', 'image/jpeg'].includes(userPicture.type)) {
          // throw error
        }

        const imageUpload = await imagekit
          .upload({
            file: user.photoURL,
            useUniqueFileName: false,
            folder: '/user',
            fileName: `${newAccount.data.registerUser.id}.${
              userPicture.type.toString().split('/')[1]
            }`,
            tags: [user.uid, 'user', 'profilePicture'],
          })
          .then((result) => {
            GraphClient.mutate({
              mutation: updateUserProfilePicture,
              variables: {
                userId: newAccount.data.registerUser.id,
                storePath: result.filePath,
                blurhash: result.blurhash,
              },
            });
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <authContext.Provider
      value={{ loginWithToken, logout, user, firebaseToken, refreshToken, mid }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
