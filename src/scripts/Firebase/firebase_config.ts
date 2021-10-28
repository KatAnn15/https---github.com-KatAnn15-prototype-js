// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh02xdVEfBeqmH33tJb400jZILLmmHL0g",
  authDomain: "prototype-ae9eb.firebaseapp.com",
  databaseURL:
    "https://prototype-ae9eb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prototype-ae9eb",
  storageBucket: "prototype-ae9eb.appspot.com",
  messagingSenderId: "122319683458",
  appId: "1:122319683458:web:3095d5e0f2f7051075d99b",
  measurementId: "G-RE1ETFTFQE",
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage(app);
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const db = firebase.firestore();
