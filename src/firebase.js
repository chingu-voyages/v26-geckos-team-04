// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaSpYNaWGiFsscNhrMF_oqikPO005lzbk",
  authDomain: "gecko-team-04.firebaseapp.com",
  projectId: "gecko-team-04",
  storageBucket: "gecko-team-04.appspot.com",
  messagingSenderId: "1001477519875",
  appId: "1:1001477519875:web:6c143296b3357dac476c36",
  measurementId: "G-BLT42E6JGR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
