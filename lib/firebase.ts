import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfQeTmezF3VuJEFPKAo17_OD0crQjk-u4',
  authDomain: 'nextfire-app-d6d89.firebaseapp.com',
  projectId: 'nextfire-app-d6d89',
  storageBucket: 'nextfire-app-d6d89.appspot.com',
  messagingSenderId: '71086996249',
  appId: '1:71086996249:web:4c64d2e4ee66cff408a388',
  measurementId: 'G-FTC6RYPLC6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
