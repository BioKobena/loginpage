// Configuration de l'environnement Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Configuration de l'application Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDUUpmoiSOl7Vb4hR7fDG-_1z8tSUYHV7w",
  authDomain: "badeya-b126c.firebaseapp.com",
  projectId: "badeya-b126c",
  storageBucket: "badeya-b126c.appspot.com",
  messagingSenderId: "1009112138098",
  appId: "1:1009112138098:web:cfd55a5564e8c6659a9deb",
  measurementId: "G-BC48WB2NKW",
};


firebase.initializeApp(firebaseConfig)

export {firebase}