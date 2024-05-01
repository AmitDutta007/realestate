// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlkfquCOOipaH0S9LIKP_B0fmEjoAxxHA",
    authDomain: "realestate-cd0f4.firebaseapp.com",
    projectId: "realestate-cd0f4",
    storageBucket: "realestate-cd0f4.appspot.com",
    messagingSenderId: "661415558719",
    appId: "1:661415558719:web:65239a8caabb86c97fc28a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()