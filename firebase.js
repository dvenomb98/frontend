// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCD4IpkzOUQUtizWavGRFxc8g4TVJOD3lA',
  authDomain: 'krtekmoneylife-c11c2.firebaseapp.com',
  projectId: 'krtekmoneylife-c11c2',
  storageBucket: 'krtekmoneylife-c11c2.appspot.com',
  messagingSenderId: '813791864200',
  appId: '1:813791864200:web:1c662e533ec80e292bc63d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
