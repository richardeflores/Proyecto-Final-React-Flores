import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../../Context/ProviderContext";
import "./ItemCart.css";

const ItemCart = () => {
	const { remove } = useContext(ProviderContext);

	return (
		<Container fluid className="itemInCart">
			{cart.map((prod) => (
				<div>
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
							<span>Cantidad: {prod.stock}</span>
							<span>
								Subtotal: {`$ ${(prod.stock * prod.price).toFixed(2)}`}
							</span>
							<Button variant="primary" onClick={() => remove(prod.id)}>
								🛒
							</Button>
						</Col>
					</Card>
				</div>
			))}
		</Container>
	);
};
export default ItemCart;
