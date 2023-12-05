// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdvEFtM7gjWi2MP0UmMWlhoVc1y2uUVpo",
  authDomain: "fir-practice-daf73.firebaseapp.com",
  projectId: "fir-practice-daf73",
  storageBucket: "fir-practice-daf73.appspot.com",
  messagingSenderId: "518889919904",
  appId: "1:518889919904:web:e6ea172519e8d1a33a40c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
