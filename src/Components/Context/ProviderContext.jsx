import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext();

const firstCart = JSON.parse(localStorage.getItem("cart")) || [];

export const ShopProvider = ({ children }) => {
	const [cart, setCart] = useState(firstCart);

	const addToCart = (item, qty) => {
		const itemAdded = { ...item, qty };
		const newCart = [...cart];
		const inCart = newCart.find((prod) => prod.id === itemAdded.id);

		if (inCart) {
			inCart.qty += qty;
		} else {
			newCart.push(itemAdded);
		}
		setCart(newCart);
	};

	const qtyInCart = () => {
		return cart.reduce((acc, prod) => acc + prod.qty, 0);
	};

	const listCartContext = createContext(null);

	const remove = (id) => {
		const updateList = cart.filter((product) => product.id !== id);
		setCart(updateList);
	};

	const totalPrice = () => {
		return cart.reduce((acc, prod) => acc + prod.price * prod.qty, 0);
	};

	const emptyCart = () => {
		setCart([]);
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const [showCart, setShowCart] = useState("none");

	return (
		<ProviderContext.Provider
			value={{
				cart,
				addToCart,
				qtyInCart,
				listCartContext,
				remove,
				totalPrice,
				emptyCart,
				showCart,
				setShowCart,
			}}>
			{children}
		</ProviderContext.Provider>
	);
};
