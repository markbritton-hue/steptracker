import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Njd86Md8JF9wp4KNrLWdjgKBJeNwCW4",
  authDomain: "steptracker-f5940.firebaseapp.com",
  projectId: "steptracker-f5940",
  storageBucket: "steptracker-f5940.firebasestorage.app",
  messagingSenderId: "33755841143",
  appId: "1:33755841143:web:d7f69852d038bbc0e4fc72"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
