
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDArd2Zhd1TqpQiW7DX2U0tZG8F8a83lfE",
    authDomain: "equilatero-percusion.firebaseapp.com",
    projectId: "equilatero-percusion",
    storageBucket: "equilatero-percusion.appspot.com",
    messagingSenderId: "809499217617",
    appId: "1:809499217617:web:b37eefd4e43f3435d27ff0",
    measurementId: "G-NGJ9702SL4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);