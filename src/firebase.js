// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB--yxwDh5jR4DzP1QeqpeKPDxZHCysgOk",
    authDomain: "ming-d15c9.firebaseapp.com",
    databaseURL: "https://ming-d15c9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ming-d15c9",
    storageBucket: "ming-d15c9.firebasestorage.app",
    messagingSenderId: "285864615061",
    appId: "1:285864615061:web:2a014df8304a027cc4cf9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);