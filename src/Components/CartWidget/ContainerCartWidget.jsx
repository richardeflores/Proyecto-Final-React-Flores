import { Container, Button } from "react-bootstrap";
import ItemCart from "./FloatingCart";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import { controllerShowCart } from "../Context/ContextCart";
import "./ContainerCartWidget.css";

const ContainerCartWidget = () => {
	const { cart, totalPrice, emptyCart } = useContext(ProviderContext);
	const { showCart, setShowCart } = useContext(controllerShowCart);

	const style = {
		display: showCart,
	};

	const closeCart = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	const clearCart = () => {
		emptyCart();
	};

	return (
		<Container className="container-cart" style={style}>
			<div className="containerClose">
				<Button
					variant="outline-primary"
					onClick={closeCart}
					className="closeButton">
					<h6 id="btn-cart">✖️</h6>
				</Button>
				<h4 style={{ color: "black", textAlign: "left" }}>
					This is your product list:
				</h4>
			</div>
			<div>
				{cart.length === 0 ? (
					<span className="emptyCart">
						Your cart is empty, Let's find some products!.
					</span>
				) : (
					<div className="contenedorLista">
						{cart.map((product) => (
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
			<div>
				{cart.length !== 0 && (
					<>
						{" "}
						<h2>Precio total: {totalPrice()}</h2>
						<div className="containerBtnCart">
							<Button>Checkout</Button>
							<Button onClick={clearCart}>
								<h6>🗑️</h6>
							</Button>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};

export default ContainerCartWidget;
