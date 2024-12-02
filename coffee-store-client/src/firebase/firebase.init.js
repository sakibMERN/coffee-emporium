// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA86KOSbU_4zab5WE7b7fFT0q5NWl5s3uI",
  authDomain: "coffee-store-f3d60.firebaseapp.com",
  projectId: "coffee-store-f3d60",
  storageBucket: "coffee-store-f3d60.firebasestorage.app",
  messagingSenderId: "238357798619",
  appId: "1:238357798619:web:6edec43dab97666d7b36fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);