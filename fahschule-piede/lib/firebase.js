// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8HUlxDauqcuccR-Ec_dwcUQTtt10dCY",
  authDomain: "fahrschule-piede.firebaseapp.com",
  projectId: "fahrschule-piede",
  storageBucket: "fahrschule-piede.appspot.com",
  messagingSenderId: "623787031900",
  appId: "1:623787031900:web:eca8a258668e45e90c5599",
  measurementId: "G-43MQ3920B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase and get the app instance
export const db = getFirestore(app);
