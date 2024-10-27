import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const CartWidget = () => {
	const { qtyInCart, setShowCart, showCart, cart } =
		useContext(ProviderContext);
	const cartShowed = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};
	console.log(cart);
	return (
		<div className="carrito" onClick={cartShowed}>
			🛒
			<span className="badge">{qtyInCart()}</span>
		</div>
	);
};

export default CartWidget;
