import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";

const Item = ({ products }) => {
	const { cart, addToCart } = useContext(ProviderContext);

	return (
		<Col lg={3} md={6} xs={12} className="columna" key={products.id}>
			<Card style={{ width: "18rem" }}>
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
							variant="outline-primary"
							id="addCart"
							onClick={() => {
								addToCart(products, 1);
							}}>
							🛒
						</Button>
					</Col>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Item;
