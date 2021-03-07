import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZxCxfMnNMT-h6M11GeXyR0PiH94g3qxI",
  authDomain: "snapchat-clone-26d44.firebaseapp.com",
  projectId: "snapchat-clone-26d44",
  storageBucket: "snapchat-clone-26d44.appspot.com",
  messagingSenderId: "38745272692",
  appId: "1:38745272692:web:75115175cd20e69a967c21",
  measurementId: "G-GPFB44M430",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
