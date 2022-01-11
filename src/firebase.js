import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf9DNwH2UHUyCA8NmQj8mXr2kSb0wKdC8",
  authDomain: "netflix-clone-5a373.firebaseapp.com",
  projectId: "netflix-clone-5a373",
  storageBucket: "netflix-clone-5a373.appspot.com",
  messagingSenderId: "45716735087",
  appId: "1:45716735087:web:c55215bd18fcad9406399a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
