import { createContext, useState } from "react";
import products from "../Products/products";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCJOr024yRAMFcTqnSqvNwKWdkR4O5rVKI",
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

export const listCartContext = createContext(null);

const ProviderContextCart = ({ children }) => {
	const [listCart, setListCart] = useState([]);

	const addProduct = (id) => {
		//Find the product I want to add
		const productAdd = products.find((product) => product.id === id);

		//Array of products in cart
		const productInList = listCart.filter((product) => product.id !== id);

		let add = true;
		for (let product of listCart) {
			if (product.id === id) {
				let stock = product.stock;

				if (stock < productAdd.stock) {
					const newQty = { ...product, stock: stock + 1 };
					setListCart([...productInList, newQty]);
				}

				add = false;
				break;
			}
		}
		add && setListCart([...productInList, { ...productAdd, stock: 1 }]);
	};

	const clearCart = () => {
		setListCart([]); //empty the cart.
	};

	const remove = (id) => {
		const updateList = listCart.filter((product) => product.id !== id);
		setListCart(updateList);
	};

	return (
		<listCartContext.Provider
			value={{
				remove,
				listCart,
				addProduct,
				clearCart,
			}}>
			{children}
		</listCartContext.Provider>
	);
};

export default ProviderContextCart;
