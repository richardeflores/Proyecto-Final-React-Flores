import { createContext, useState } from "react";

export const ProviderContext = createContext();

const firstCart = [];

export const CartProvider = ({ children }) => {
	const { cart, setCart } = useState([]);
	const addToCart = (item, qty) => {
		const itemAdded = { ...item, qty };
		const newCart = [...cart];
		const inCart = newCart.find((product) => product.id === itemAdded.id);

		if (inCart) {
			inCart.qty += qty;
			setCart(newCart);
		} else {
			newCart.push(itemAdded);
		}
		setCart([...newCart, itemAdded]);
	};

	const qtyInCart = () => {
		return cart.reduce((acc, prod) => acc + prod.qty, 0);
	};

	const totalPrice = () => {
		return cart.reduce((acc, prod) => acc + prod.price * prod.qty, 0);
	};
	const emptyCart = () => {
		setCart([]);
	};

	return (
		<ProviderContext.Provider
			value={{ cart, addToCart, qtyInCart, totalPrice, emptyCart }}>
			{children}
		</ProviderContext.Provider>
	);
};

export default ProviderContext;
