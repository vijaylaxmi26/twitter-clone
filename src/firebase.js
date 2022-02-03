// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMPTvM6PttrkBmqTJTboWu3qQoQ_xrgVE",
  authDomain: "twitter-clone-eb462.firebaseapp.com",
  projectId: "twitter-clone-eb462",
  storageBucket: "twitter-clone-eb462.appspot.com",
  messagingSenderId: "570722003029",
  appId: "1:570722003029:web:e55461c3a781cce9ea8cdc",
  measurementId: "G-FT48TFSCM2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;