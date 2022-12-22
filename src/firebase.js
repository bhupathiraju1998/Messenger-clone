import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCpcQn7b23iJNuxqiHRcqo8C9vv95zQcfs",
    authDomain: "unichat-c3b61.firebaseapp.com",
    projectId: "unichat-c3b61",
    storageBucket: "unichat-c3b61.appspot.com",
    messagingSenderId: "274582404033",
    appId: "1:274582404033:web:a28e922495263d61aacd40"
  }).auth();