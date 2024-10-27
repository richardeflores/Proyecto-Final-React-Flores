import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API,
	authDomain: "richardstore-af657.firebaseapp.com",
	projectId: "richardstore-af657",
	storageBucket: "richardstore-af657.appspot.com",
	messagingSenderId: "596971287963",
	appId: "1:596971287963:web:3cfa3271e24424f89f5d3e",
	measurementId: "G-JMST2ZW0QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
