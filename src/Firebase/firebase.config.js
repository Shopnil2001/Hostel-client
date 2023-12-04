// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_KEY,
    authDomain:import.meta.env.VITE_DOMAIN,
    projectId:import.meta.env.VITE_ID,
    storageBucket:import.meta.env.VITE_BUCKET,
    messagingSenderId:import.meta.env.VITE_SENDERID,
    appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;