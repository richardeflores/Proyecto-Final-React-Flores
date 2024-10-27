import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products, category }) => {
	return (
		<>
			<Row className="titulo-tienda">
				<h2>Nuestros Productos: {category}</h2>
			</Row>
			<Row xs="4">
				{products.map((products) => (
					<Item products={products} key={products.id} />
				))}
			</Row>
		</>
	);
};

export default ItemList;
