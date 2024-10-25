import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./ItemDetailed.css";
import ButtonAddToCart from "../CartWidget/AddToCart";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import ProviderContext from "../Context/ProviderContext";

function ItemDetailed({ item }) {
	const { cart, addToCart } = useContext(ProviderContext);
	console.log(cart);

	const [cantidad, setCantidad] = useState(1);

	const handleRestar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};

	const handleSumar = () => {};

	// Destructura las props
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
							cantidad={cantidad}
							handleSumar={handleSumar}
							handleRestar={handleRestar}
							handleAgregar={() => {
								addToCart(item, cantidad);
							}}
						/>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default ItemDetailed;
