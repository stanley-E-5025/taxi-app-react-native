import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDhkoatpztrwqercS1oyB_rVjF1PUCj8HU',
  authDomain: 'fir-ce515.firebaseapp.com',
  projectId: 'fir-ce515',
  storageBucket: 'fir-ce515.appspot.com',
  messagingSenderId: '552436280779',
  appId: '1:552436280779:web:2da2e58eed762639351a4e',
  measurementId: 'G-MXKHF33QW2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {firebase, db};
