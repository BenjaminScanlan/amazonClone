import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW3q8Cn0jUDfqhKA-HzstbySIo9_DDQZ8",
  authDomain: "clone-a6b16.firebaseapp.com",
  projectId: "clone-a6b16",
  storageBucket: "clone-a6b16.appspot.com",
  messagingSenderId: "301652289693",
  appId: "1:301652289693:web:c1a2d6b283efc3293f8c74",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
