// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTTHsk8uiGdt3KSNEm30tOUO2UDbrsFOU",
  authDomain: "netflix-app-4f8c6.firebaseapp.com",
  projectId: "netflix-app-4f8c6",
  storageBucket: "netflix-app-4f8c6.appspot.com",
  messagingSenderId: "347170555839",
  appId: "1:347170555839:web:d24cf60cc63a662bfa830a",
  measurementId: "G-61ZHZ61WTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()