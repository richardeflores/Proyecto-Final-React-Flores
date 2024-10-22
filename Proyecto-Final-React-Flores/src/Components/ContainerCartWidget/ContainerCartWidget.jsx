import { Container, Button } from "react-bootstrap";
import ItemCart from "../CartWidget/ItemInCart/ItemCart";
import { useContext } from "react";
import { listCartContext } from "../Context/ProviderContextCart";
import { controllerShowCart } from "../Context/ContextCart";
import "./ContainerCartWidget.css";

const ContainerCart = () => {
	const { listCart, clearCart } = useContext(listCartContext);
	const { showCart, setShowCart } = useContext(controllerShowCart);

	const style = {
		display: showCart,
	};

	const closeCart = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<Container className="container-cart" style={style}>
			<div className="containerClose">
				<Button onClick={closeCart} className="closeButton">
					<h6>✖️</h6>
				</Button>
				<h4 style={{ color: "black", textAlign: "left" }}>
					This is your product list:
				</h4>
			</div>
			<div>
				{listCart.length === 0 ? (
					<span className="emptyCart">
						Your cart is empty, Let's find some products!.
					</span>
				) : (
					<div className="contenedorLista">
						{listCart.map((product) => (
							<>
								<ItemCart
									key={product.id}
									id={product.id}
									title={product.title}
									image={product.image}
									stock={product.stock}
									price={product.price}
								/>
							</>
						))}
					</div>
				)}
			</div>
			<div className="containerBtnCart">
				<Button>Checkout</Button>
				<Button onClick={clearCart}>
					<h6>🗑️</h6>
				</Button>
			</div>
		</Container>
	);
};

export default ContainerCart;
