// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = firebase.apps
if (!app.length) {
    app.initializeApp(firebaseConfig);
}
const analytics = getAnalytics(app);