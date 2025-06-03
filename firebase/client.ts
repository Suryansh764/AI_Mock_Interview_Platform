import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from  "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyB6TohT821pgVrggm0PxQnH71ev5fcRV1M",
    authDomain: "intervezz.firebaseapp.com",
    projectId: "intervezz",
    storageBucket: "intervezz.firebasestorage.app",
    messagingSenderId: "367687582210",
    appId: "1:367687582210:web:dc11ef2146994d1ee29d1b",
    measurementId: "G-W9M448KY5B"
};

// Initialize Firebase
const app =  !getApps.length ?   initializeApp(firebaseConfig) :  getApp();

export const auth = getAuth(app)
export const db=  getFirestore(app)