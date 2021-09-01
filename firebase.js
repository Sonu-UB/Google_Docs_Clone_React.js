import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB--_PKAv9MVhJtwYlF1J4AVeMHZEJxhIQ",
    authDomain: "docs-clone-6bcff.firebaseapp.com",
    projectId: "docs-clone-6bcff",
    storageBucket: "docs-clone-6bcff.appspot.com",
    messagingSenderId: "148738322922",
    appId: "1:148738322922:web:db620411480f932127c293"
  };

  const app = !firebase.apps.length ? firebase.initializeApp
  (firebaseConfig):firebase.app();

  const db = app.firestore();

  export { db };