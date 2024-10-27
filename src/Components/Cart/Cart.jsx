import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../Context/ProviderContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
	const { remove, cart, totalPrice } = useContext(ProviderContext);

	return (
		<Container fluid>
			<h1>Resumen de sus productos</h1>
			{cart.map((prod) => (
				<div key={prod.id} className="itemInCart">
					<Card
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
						}}
						className="cardImage">
						<Col xs={6} md={3}>
							<Image src={prod.image} thumbnail />
						</Col>
						<Col
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}>
							<span>{prod.title}</span>
							<span>Cantidad: {prod.qty}</span>
							<span>Subtotal: {`$ ${(prod.qty * prod.price).toFixed(2)}`}</span>
							<Button variant="outline-primary" onClick={() => remove(prod.id)}>
								🗑️
							</Button>
						</Col>
					</Card>
				</div>
			))}

			<h2 className="totalPrice">Precio Total: $ {totalPrice()} </h2>
			<div id="btn-checkout">
				<Link to="/Proyecto-Final-React-Flores/checkout">
					<Button>Checkout</Button>
				</Link>
			</div>
		</Container>
	);
};

export default Cart;
