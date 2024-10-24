import { createContext, useState } from "react";

export const controllerShowCart = createContext(null);

const ContextCart = ({ children }) => {
	const [showCart, setShowCart] = useState("none");

	return (
		<controllerShowCart.Provider value={{ showCart, setShowCart }}>
			{children}
		</controllerShowCart.Provider>
	);
};

export default ContextCart;
