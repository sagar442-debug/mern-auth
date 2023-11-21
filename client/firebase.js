// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-26356.firebaseapp.com",
  projectId: "mern-auth-26356",
  storageBucket: "mern-auth-26356.appspot.com",
  messagingSenderId: "363132094809",
  appId: "1:363132094809:web:2503d32e87920b5b6d6448"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);