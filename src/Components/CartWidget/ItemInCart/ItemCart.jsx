import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { ProviderContext } from "../../Context/ProviderContext";
import "./ItemCart.css";

const ItemCart = ({ id, title, price, stock, image }) => {
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
							<Image src={image} thumbnail />
						</Col>
						<Col
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}>
							<span>{title}</span>
							<span>Cantidad: {stock}</span>
							<span>Subtotal: {`$ ${(stock * price).toFixed(2)}`}</span>
							<Button variant="primary" onClick={() => remove(id)}>
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
