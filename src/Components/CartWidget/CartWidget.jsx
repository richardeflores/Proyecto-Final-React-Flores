import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import { controllerShowCart } from "../Context/ContextCart";

const CartWidget = () => {
	const { setShowCart, showCart } = useContext(controllerShowCart);

	const { qtyInCart } = useContext(ProviderContext);

	const cartShowed = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<div className="carrito" onClick={cartShowed}>
			🛒
			<span className="badge">{qtyInCart()}</span>
		</div>
	);
};

export default CartWidget;
