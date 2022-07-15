// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
///import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //apiKey:
  apiKey:= your app key?
  authDomain: "react-project-bff47.firebaseapp.com",
  projectId: "react-project-bff47",
  storageBucket: "react-project-bff47.appspot.com",
  messagingSenderId: "742226865686",
  appId: "1:742226865686:web:1afc270474d4f01d298f37",
  measurementId: "G-6L11MS1QX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 export const auth = getAuth(app);