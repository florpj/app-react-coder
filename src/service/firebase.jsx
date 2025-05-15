// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqsVAZnjNRNZnO6_JXBx1h6oWWM_PYL7I",
  authDomain: "app-pizzas-coder.firebaseapp.com",
  projectId: "app-pizzas-coder",
  storageBucket: "app-pizzas-coder.firebasestorage.app",
  messagingSenderId: "346591468420",
  appId: "1:346591468420:web:4d8a172c1b41c62f7b5bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)