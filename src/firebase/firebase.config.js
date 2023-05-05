// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwYfdVCkoZmclLp7L1GItfMDaTsXu7hrU",
    authDomain: "kahabardokan10.firebaseapp.com",
    projectId: "kahabardokan10",
    storageBucket: "kahabardokan10.appspot.com",
    messagingSenderId: "593677855684",
    appId: "1:593677855684:web:4c6b6a70c8cd1e8ffbd291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app