import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { APP_FIREBASE_API_KEY, APP_FIREBASE_AUTH_DOMAIN, APP_FIREBASE_DATABASE_URL, APP_FIREBASE_PROJECT_ID, APP_FIREBASE_STORAGE_BUCKET, APP_FIREBASE_MESSAGING_SENDER_ID, APP_FIRBASE_APP_ID } from '@env'

const firebaseConfig = {
  apiKey: APP_FIREBASE_API_KEY,
  authDomain: APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: APP_FIREBASE_DATABASE_URL,
  projectId: APP_FIREBASE_PROJECT_ID,
  storageBucket: APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: APP_FIRBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
