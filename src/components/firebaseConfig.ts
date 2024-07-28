// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0qHt0NKUugE3wd3FQOzdXqO8YE9livQ",
  authDomain: "login-authentication-afefe.firebaseapp.com",
  projectId: "login-authentication-afefe",
  storageBucket: "login-authentication-afefe.appspot.com",
  messagingSenderId: "419270231204",
  appId: "1:419270231204:web:80be7e00cfcb69a1d6d231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth=getAuth()

export const db = getFirestore(app)

export default app