import Button from "react-bootstrap/Button";
import { useContext } from "react";
import ProviderContext from "../Context/ProviderContext";

const ButtonAddToCart = ({ id }) => {
	let { addProduct } = useContext(ProviderContext);

	return (
		<Button
			variant="outline-primary"
			id="addCart"
			onClick={() => addProduct(id)}>
			<h6>🛒</h6>
		</Button>
	);
};

export default ButtonAddToCart;
