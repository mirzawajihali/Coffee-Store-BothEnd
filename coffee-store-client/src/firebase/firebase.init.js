// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Sewdjr5UHj-m_jWY3jIwwPLYqJhfAQo",
  authDomain: "coffee-store-7d628.firebaseapp.com",
  projectId: "coffee-store-7d628",
  storageBucket: "coffee-store-7d628.firebasestorage.app",
  messagingSenderId: "141899096695",
  appId: "1:141899096695:web:2bac4479cdcdf1f5f55c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);