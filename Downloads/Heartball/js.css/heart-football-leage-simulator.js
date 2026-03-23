// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAx-Yg0aQHu1X2OBEVyshlPtUJAG-C3G8",
  authDomain: "heart-football-leage-simulator.firebaseapp.com",
  projectId: "heart-football-leage-simulator",
  storageBucket: "heart-football-leage-simulator.firebasestorage.app",
  messagingSenderId: "217253911279",
  appId: "1:217253911279:web:958494e0d1df2998d6991a",
  measurementId: "G-DB6P5SG0NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);