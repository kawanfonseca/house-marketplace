// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAdj8gkj0uMV8Lsag8k2lRqDOG2gM7Ypsc",

    authDomain: "house-marketplace-app-cb3da.firebaseapp.com",

    projectId: "house-marketplace-app-cb3da",

    storageBucket: "house-marketplace-app-cb3da.appspot.com",

    messagingSenderId: "807835808494",

    appId: "1:807835808494:web:a8df9bb1123b187995f9ff"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore()