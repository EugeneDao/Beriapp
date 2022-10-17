import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXU3qk8ECBX-jdXcFfiM1Ciq86ghb6EBw",
  authDomain: "beriapp-692b9.firebaseapp.com",
  projectId: "beriapp-692b9",
  storageBucket: "beriapp-692b9.appspot.com",
  messagingSenderId: "1096247468077",
  appId: "1:1096247468077:web:698d6d41730194a9f458a4",
  measurementId: "G-JL0Y6V94SB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
