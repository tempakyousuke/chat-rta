import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVw0F-otnc29wFM-JO23zaz3u2GJ7Q_4o",
  authDomain: "chat-rta.firebaseapp.com",
  projectId: "chat-rta",
  storageBucket: "chat-rta.appspot.com",
  messagingSenderId: "58897619418",
  appId: "1:58897619418:web:b9c40863a69989e38808e3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const fireauth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
