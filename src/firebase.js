import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyD-zLY3mK2ENCrFJNcQlUGGaYfBgp8fBzg",
    authDomain: "waveschat-92df8.firebaseapp.com",
    projectId: "waveschat-92df8",
    storageBucket: "waveschat-92df8.appspot.com",
    messagingSenderId: "57570406129",
    appId: "1:57570406129:web:f544eabdf78ccb1fe30350",
    measurementId: "G-J012M7LG99"
  }).auth();