import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import { controllerShowCart } from "../Context/ContextCart";

const CartWidget = () => {
	const { qtyInCart } = useContext(ProviderContext);
	const { setShowCart, showCart } = useContext(controllerShowCart);
	const { cart } = useContext(ProviderContext);
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
