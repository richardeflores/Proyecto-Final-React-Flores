import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const Item = ({ products, addToCart }) => {
	const { cart, setCart } = useContext(ProviderContext);

	return (
		<Col lg={3} md={6} xs={12} className="columna">
			<Card style={{ width: "18rem" }} key={products.id}>
				<Card.Img variant="top" src={products.image} atl={products.title} />
				<Card.Body>
					<Card.Title>{products.title}</Card.Title>
					<Card.Text>{products.category}</Card.Text>

					<h6 className="card-price" variant="primary">
						$ {products.price}
					</h6>
					<Col id="botonesItem">
						<Link
							to={`/Proyecto-Final-React-Flores/item/${products.id}`}
							id="addCart">
							<Button variant="primary">Ver más</Button>
						</Link>
						<Button
							className="btn-item-list"
							variant="outline-primary"
							id="addCart">
							🛒
						</Button>
					</Col>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Item;
