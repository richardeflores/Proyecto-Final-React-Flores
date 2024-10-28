import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../Context/ProviderContext";
import "./FloatingCart.css";

const FloatingCart = ({ id, title, price, image, qty }) => {
	const { remove } = useContext(ProviderContext);

	return (
		<Container fluid className="itemInCart">
			<div>
				<Card
					key={id}
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
					}}
					className="cardImage">
					<Col xs={6} md={3}>
						<Image src={image} thumbnail />
					</Col>
					<Col
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
						}}>
						<span>{title}</span>
						<span>Cantidad: {qty}</span>
						<span>Subtotal: {`$ ${(qty * price).toFixed(2)}`}</span>
						<Button
							id="btn-clear-float"
							variant="outline-primary"
							onClick={() => remove(id)}>
							🗑️
						</Button>
					</Col>
				</Card>
			</div>
		</Container>
	);
};
export default FloatingCart;
