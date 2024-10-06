// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzPu0bSGLGDBX-KyooE8-g117m66IeAy8",
  authDomain: "netflixgpt-4314d.firebaseapp.com",
  projectId: "netflixgpt-4314d",
  storageBucket: "netflixgpt-4314d.appspot.com",
  messagingSenderId: "1086166023906",
  appId: "1:1086166023906:web:c2550268d59b17adf568bb",
  measurementId: "G-D62FNH461H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth()