import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import "./ItemDetailed.css";
import ButtonAddToCart from "../CartWidget/AddToCart";
import ItemCount from "./ItemCount";

function ItemDetailed({ image, title, category, description, price, id }) {
	// Destructura las props
	return (
		<Container className="container-detailed">
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{category}</Card.Text>
						<Card.Text>{description}</Card.Text>
						<h6 className="card-price" variant="primary">
							$ {price}
						</h6>
						<ItemCount />
						<div className="card-buttons">
							<ButtonAddToCart id={id} />
						</div>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default ItemDetailed;
