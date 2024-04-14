// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-14770.firebaseapp.com",
  projectId: "mern-blog-14770",
  storageBucket: "mern-blog-14770.appspot.com",
  messagingSenderId: "401343719724",
  appId: "1:401343719724:web:8d5c9007ae590ec5746489",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
