import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVYnVj1RPOKVP3M75I5J3tQXUiYcPZv-4",
  authDomain: "role-based-auth-285c7.firebaseapp.com",
  projectId: "role-based-auth-285c7",
  storageBucket: "role-based-auth-285c7.appspot.com",
  messagingSenderId: "98048568696",
  appId: "1:98048568696:web:6c19ca22e412c6303a2c8d",
  measurementId: "G-51VL2QLX3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, fireDb, storage };
