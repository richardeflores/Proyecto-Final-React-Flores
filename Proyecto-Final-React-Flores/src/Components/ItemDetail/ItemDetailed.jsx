import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./ItemDetailed.css";
import ButtonAddToCart from "../CartWidget/AddToCart";

function ItemDetailed({ product }) {
	return (
		<Container className="container-detailed">
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={product.image} />
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>{product.category}</Card.Text>
						<Card.Text>{product.description}</Card.Text>
						<h6 className="card-price" variant="primary">
							$ {product.price}
						</h6>
						<div className="card-buttons">
							<ButtonAddToCart id={product.id} />
						</div>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default ItemDetailed;
