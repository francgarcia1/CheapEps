// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmzwcopnaba7Ga4-ikLqWkiWGLYym8U4",
  authDomain: "cheap-eps.firebaseapp.com",
  projectId: "cheap-eps",
  storageBucket: "cheap-eps.appspot.com",
  messagingSenderId: "977756082066",
  appId: "1:977756082066:web:4aa0540f4d771129b87b4b",
  measurementId: "G-SMT02M89QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
