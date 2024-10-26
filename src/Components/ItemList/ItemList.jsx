import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products, title }) => {
	return (
		<>
			<Row className="titulo-tienda">
				<h2>Nuestros Productos: {title}</h2>
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
