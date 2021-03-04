import firebase from 'firebase/app';
import 'firebase/analytics';

const configureFirebase = async () => {
  if (process.env.NODE_ENV === 'production') {
    const response = await fetch('/__/firebase/init.json');
    const config = await response.json();
    firebase.initializeApp(config);
  } else {
    const firebaseConfig = {
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID,
      appId: process.env.APPID,
      measurementId: process.env.MEASUREMENTID,
    };

    firebase.initializeApp(firebaseConfig);
  }
};

export const { analytics } = firebase;

export default configureFirebase;
