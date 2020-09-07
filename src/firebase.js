import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1xsxIx8RslAb2Smt3sqwlfXiQcW1sznM",
  authDomain: "facebook-messenger-clone-c7884.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c7884.firebaseio.com",
  projectId: "facebook-messenger-clone-c7884",
  storageBucket: "facebook-messenger-clone-c7884.appspot.com",
  messagingSenderId: "588951594920",
  appId: "1:588951594920:web:382a46456c9ed821a61f9d",
  measurementId: "G-EEXQSC0QNJ",
});

const db = firebaseApp.firestore();

export default db;
