// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw4OL0HePsTKkFMKM2mU9n6eKuT3D0FyA",
    authDomain: "netflixgpt-152ef.firebaseapp.com",
    projectId: "netflixgpt-152ef",
    storageBucket: "netflixgpt-152ef.appspot.com",
    messagingSenderId: "967594785966",
    appId: "1:967594785966:web:e045bcde74cd0b6820c13f",
    measurementId: "G-QCHY3V0VPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
