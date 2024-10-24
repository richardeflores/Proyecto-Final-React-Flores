import { useContext } from "react";
import { Container, Card, Button, Col, Image } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { listCartContext } from "../ProviderContext/ProviderContextCart";
import "./ItemCart.css";

const ItemCart = ({ id, title, price, stock, image }) => {
	const { remove } = useContext(listCartContext);

	return (
		<Container fluid className="itemInCart">
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
							<FaRegTrashAlt />
						</Button>
					</Col>
				</Card>
			</div>
		</Container>
	);
};
export default ItemCart;
