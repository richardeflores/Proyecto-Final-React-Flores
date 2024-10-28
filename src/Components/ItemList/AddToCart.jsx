import Button from "react-bootstrap/Button";

const ButtonAddToCart = ({ handleAgregar }) => {
	return (
		<Button
			className="btn-item-list"
			variant="outline-primary"
			id="addCart"
			onClick={handleAgregar}>
			🛒
		</Button>
	);
};

export default ButtonAddToCart;
