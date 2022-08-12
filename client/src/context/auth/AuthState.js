import React, { useState, useEffect } from 'react';

//context
import authContext from './AuthContext';

import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../config/firebase';

const AuthState = ({ children }) => {
  const loginWithToken = (token) => {
    const credential = GoogleAuthProvider.credential(token);

    signInWithCredential(auth, credential)
      .then((res) => console.log(res.user))
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
    <authContext.Provider value={{ loginWithToken, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
