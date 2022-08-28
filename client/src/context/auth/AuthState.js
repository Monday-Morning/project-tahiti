import React, { useState, useEffect } from 'react';

//context
import authContext from './AuthContext';

import {
  GoogleAuthProvider,
  signInWithCredential,
  getIdToken,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { getApolloLink, GraphClient } from '../../config/ApolloClient';
import { setCookie } from 'nookies';

const AuthState = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState('');
  const [user, setUser] = useState(null);
  const [firebaseToken, setFirebaseToken] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, async (_user) => {
      setUser(_user);
      setFirebaseToken(await getIdToken(_user, false));
      console.log('auth state changed', _user);
    });
  }, []);

  useEffect(() => {
    GraphClient.setLink(getApolloLink(firebaseToken));
    setCookie(null, 'firebaseToken', firebaseToken, {
      secure: true,
      sameSite: true,
      maxAge: 3600,
    });
    console.log('graph client auth', firebaseToken);
  }, [firebaseToken]);

  const loginWithToken = (token) => {
    const credential = GoogleAuthProvider.credential(token);

    signInWithCredential(auth, credential)
      .then((res) => {
        setUser(res.user);
        setFirebaseToken(res.user.accessToken);
        setRefreshToken(res.user.refreshToken);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The credential that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
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
