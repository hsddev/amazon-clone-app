import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCakk3xo0obfB4011KIjv7pRt91cNxiFJs",
  authDomain: "fir-bfaaf.firebaseapp.com",
  databaseURL: "https://fir-bfaaf.firebaseio.com",
  projectId: "fir-bfaaf",
  storageBucket: "fir-bfaaf.appspot.com",
  messagingSenderId: "495452451365",
  appId: "1:495452451365:web:2becb6388a8a90d59d85cc",
  measurementId: "G-KN8Y1CQYRN",
});

const db = firebaseApp.firestore();

export default db;
