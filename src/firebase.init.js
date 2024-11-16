// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH_2oWnOrmXuRwygYFsdByKNwEyrb8Ce4",
  authDomain: "dragon-news-d5e40.firebaseapp.com",
  projectId: "dragon-news-d5e40",
  storageBucket: "dragon-news-d5e40.firebasestorage.app",
  messagingSenderId: "690071500327",
  appId: "1:690071500327:web:feba87745c531a22544002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

