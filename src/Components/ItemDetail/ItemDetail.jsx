import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./ItemDetail.css";
// import ButtonAddToCart from "../CartWidget/AddToCart";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const ItemDetail = ({ item }) => {
	const { cart, addToCart } = useContext(ProviderContext);

	const [qty, setQty] = useState(1);

	const handleRestar = () => {
		qty > 1 && setQty(qty - 1);
	};

	const handleSumar = () => {
		qty < item.stock && setQty(qty + 1);
	};

	return (
		<Container className="container-detailed">
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={item.image} />
					<Card.Body>
						<Card.Title>{item.title}</Card.Title>
						<Card.Text>{item.category}</Card.Text>
						<Card.Text>{item.description}</Card.Text>
						<h6 className="card-price" variant="primary">
							$ {item.price}
						</h6>
						<ItemCount
							qty={qty}
							handleRestar={handleRestar}
							handleSumar={handleSumar}
							handleAgregar={() => {
								addToCart(item, qty);
							}}
						/>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
};

export default ItemDetail;
