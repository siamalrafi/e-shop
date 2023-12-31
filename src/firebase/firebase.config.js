// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_apiKey,
   authDomain: process.env.NEXT_PUBLIC_authDomain,
   projectId: process.env.NEXT_PUBLIC_projectId,
   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
   appId: process.env.NEXT_PUBLIC_appId,

   // apiKey: "AIzaSyCkNxZ093Gm_Rz8MKWrou7yxr0magLwllM",
   // authDomain: "e-shop-efab9.firebaseapp.com",
   // projectId: "e-shop-efab9",
   // storageBucket: "e-shop-efab9.appspot.com",
   // messagingSenderId: "815590904829",
   // appId: "1:815590904829:web:b82dfccf2b1467f643ff94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
