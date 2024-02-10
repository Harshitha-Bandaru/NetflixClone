// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD87OPpVKw9NGVxMGhcAUQAilgZKQBEBm0",
  authDomain: "netflix-gpt-4a0c3.firebaseapp.com",
  projectId: "netflix-gpt-4a0c3",
  storageBucket: "netflix-gpt-4a0c3.appspot.com",
  messagingSenderId: "973514509405",
  appId: "1:973514509405:web:1e637e07525b5670c2d1b4",
  measurementId: "G-GTMVV1VCLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
