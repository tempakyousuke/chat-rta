import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL2ik01B3WkBQR8P8NJm9IhoxSaO2x_d0",
  authDomain: "hide-and-seek-add2c.firebaseapp.com",
  databaseURL: "https://hide-and-seek-add2c.firebaseio.com",
  projectId: "hide-and-seek-add2c",
  storageBucket: "hide-and-seek-add2c.appspot.com",
  messagingSenderId: "542708033036",
  appId: "1:542708033036:web:e1989138ab1c0829d8f029",
  measurementId: "G-PQ827YCZVV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const fireauth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
