import { useContext } from "react";
import { listCartContext } from "../Context/ProviderContextCart";
import { controllerShowCart } from "../Context/ContextCart";

const CartWidget = () => {
	const { setShowCart, showCart } = useContext(controllerShowCart);
	const { listCart } = useContext(listCartContext);

	const cartShowed = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<div className="carrito" onClick={cartShowed}>
			🛒
			<span className="badge">{listCart.length}</span>
		</div>
	);
};

export default CartWidget;
