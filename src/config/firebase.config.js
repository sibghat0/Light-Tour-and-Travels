import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDySCqSVo6N0BYry5A4OJ70fSC2J4IzEmY",
  authDomain: "light-tour-and-travels.firebaseapp.com",
  databaseURL: "https://light-tour-and-travels.firebaseio.com",
  projectId: "light-tour-and-travels",
  storageBucket: "light-tour-and-travels.appspot.com",
  messagingSenderId: "139447101715",
  appId: "1:139447101715:web:7a2492fdee06fc04c652e6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //enable google-signin pop-up
provider.setCustomParameters({ promt: "selected_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
