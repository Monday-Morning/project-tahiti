import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getRemoteConfig, isSupported } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = firebaseApp ? getAuth(firebaseApp) : null;

export const remoteConfig = async () =>
  (await isSupported()) && firebaseApp && getRemoteConfig(firebaseApp);

if (process.env.NODE_ENV !== 'production' && auth) {
  connectAuthEmulator(auth, 'http://localhost:9099');
}
