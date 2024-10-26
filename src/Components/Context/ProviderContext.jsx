import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext();

// const firstCart = JSON.parse(localStorage.getItem("cart")) || [];

// export const CartProvider = ({ children }) => {
// 	const { cart, setCart } = useState([firstCart]);
// 	const addToCart = (item, qty) => {
// 		const itemAdded = { ...item, qty };
// 		const newCart = [...cart];
// 		const inCart = newCart.find((product) => product.id === itemAdded.id);

// 		if (inCart) {
// 			inCart.qty += qty;
// 			setCart(newCart);
// 		} else {
// 			newCart.push(itemAdded);
// 		}
// 		setCart([...newCart, itemAdded]);
// 	};

// 	const emptyCart = () => {
// 		setCart([]);
// 	};

// 	useEffect(() => {
// 		localStorage.setItem("cart", JSON.stringify(cart));
// 	}, [cart]);

// 	return (
// 		<ProviderContext.Provider
// 			value={{ cart, addToCart, qtyInCart, totalPrice, emptyCart }}>
// 			{children}
// 		</ProviderContext.Provider>
// 	);
// };

export default ProviderContext;
