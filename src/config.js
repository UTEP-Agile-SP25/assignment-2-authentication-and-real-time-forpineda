// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZD-fEWqdpYPqUaSJ5wyzge-KzSDhjYfg",
  authDomain: "assigment-two-37159.firebaseapp.com",
  projectId: "assigment-two-37159",
  storageBucket: "assigment-two-37159.firebasestorage.app",
  messagingSenderId: "47678324459",
  appId: "1:47678324459:web:0d06403bcb1f03335308ae",
  measurementId: "G-TCS5ZGXWFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 

