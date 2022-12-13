import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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

import ImageKit from 'imagekit-javascript';
import { setCookie } from 'nookies';

const AuthState = ({ children }) => {
  const { push } = useRouter();

  const [refreshToken, setRefreshToken] = useState('');
  const [user, setUser] = useState(null);
  const [firebaseToken, setFirebaseToken] = useState('');

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
  }, [firebaseToken]);

  const loginWithToken = async (_token) => {
    const credential = GoogleAuthProvider.credential(_token);

    const res = await signInWithCredential(auth, credential);

    const { user, _tokenResponse } = res;
    setUser(user);
    setFirebaseToken(user.accessToken);
    setRefreshToken(user.refreshToken);

    if (getAdditionalUserInfo(res).isNewUser) {
      try {
        const imagekit = new ImageKit({
          publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
          urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT,
          authenticationEndpoint:
            process.env.NEXT_PUBLIC_IMAGEKIT_AUTHENTICATION_ENDPOINT,
        });

        const userPicture = await (await fetch(user.photoURL)).blob();

        if (!['image/png', 'image/jpeg'].includes(userPicture.type)) {
          // throw error
        }

        const imageUpload = await imagekit
          .upload({
            file: userPicture,
            folder: '/user',
            fileName: `${user.uid}.${
              userPicture.type.toString().split('/')[1]
            }`,
            tags: [user.uid, 'user', 'profilePicture'],
          })
          .then((result) => {
            console.log('Upload Success', result);
          });

        const newAccount = await GraphClient.mutate({
          mutation: registerUser,
          variables: {
            fullName: user.displayName,
            email: user.email,
          },
        });
        console.log('Account Created ', newAccount);
      } catch (err) {
        console.log(err);
      }
    }

    push('/admin_v2');
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <authContext.Provider
      value={{ loginWithToken, logout, user, firebaseToken, refreshToken }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
