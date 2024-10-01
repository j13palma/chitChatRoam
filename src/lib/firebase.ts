// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'chitchat-7eec1.firebaseapp.com',
  projectId: 'chitchat-7eec1',
  storageBucket: 'chitchat-7eec1.appspot.com',
  messagingSenderId: '880206178517',
  appId: '1:880206178517:web:1f1acc2d99de49f3bd5a5c',
  measurementId: 'G-EZYM2W126N',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
