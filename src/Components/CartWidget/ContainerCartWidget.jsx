import { Container, Button } from "react-bootstrap";
import FloatingCart from "./FloatingCart";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import "./ContainerCartWidget.css";
import { Link } from "react-router-dom";

const ContainerCartWidget = () => {
	const { cart, totalPrice, emptyCart } = useContext(ProviderContext);
	const { showCart, setShowCart } = useContext(ProviderContext);

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
						Tu carrito está vacio. ¡Agreguemos algo!.
					</span>
				) : (
					<div className="contenedorLista">
						{cart.map((product) => (
							<>
								<FloatingCart
									key={product.id}
									id={product.id}
									title={product.title}
									image={product.image}
									stock={product.stock}
									price={product.price}
									qty={product.qty}
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
							<Link to="/checkout">
								<Button>Checkout</Button>
							</Link>
							<Button onClick={clearCart} variant="outline-primary">
								🗑️
							</Button>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};

export default ContainerCartWidget;
