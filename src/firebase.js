import firebase from "firebase";

// initialise the firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqwjd7DPjvhA02ImXyo13Q365Iv_W5yEs",
  authDomain: "react-instagram-assignment.firebaseapp.com",
  projectId: "react-instagram-assignment",
  storageBucket: "react-instagram-assignment.appspot.com",
  messagingSenderId: "670229491068",
  appId: "1:670229491068:web:68285a20c7f18c5578c8f9",
  measurementId: "G-X3QG8Q175L",
});

// initialiaing the database firestore
const db = firebaseApp.firestore();
// const db = firebaseApp.database();
const auth = firebase.auth();
const storage = firebase.storage();

// exporting firebase configuration
export { db, auth, storage, firebase };

// Project Console: https://console.firebase.google.com/project/react-instagram-assignment/overview
// Hosting URL: https://react-instagram-assignment.web.app
