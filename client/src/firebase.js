// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "machan-blog.firebaseapp.com",
  projectId: "machan-blog",
  storageBucket: "machan-blog.appspot.com",
  messagingSenderId: "476036392704",
  appId: "1:476036392704:web:31c8edc50c58a0104ab5e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);