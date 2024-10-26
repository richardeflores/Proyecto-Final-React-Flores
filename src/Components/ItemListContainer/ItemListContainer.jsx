import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import { getData } from "../helper/GetData";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [title, setTitle] = useState("Productos");
	const category = useParams().idCategory;

	useEffect(() => {
		getData().then((res) => {
			if (category) {
				setProducts(res.filter((prod) => prod.category === category));
				setTitle(category);
			} else {
				setProducts(res);
				setTitle("");
			}
		});
	}, [category]);

	return (
		<Container>
			<ItemList products={products} title={title} />
		</Container>
	);
};

export default ItemListContainer;

// const ItemListContainer = () => {
// 	const [products, setProducts] = useState([]);

// 	useEffect(() => {
// 		const productsRef = collection(db, "items");
// 		const q = category
// 			? query(productsRef, where("category", "==", category))
// 			: productsRef;
// 		getDocs(q).then((res) => {
// 			setProducts(
// 				res.docs.map((product) => {
// 					return { ...product.data(), id: product.id };
// 				})
// 			);
// 		});
// 	}, [category]);

// 	return (
// 		<>
// 			<Container>
// 				{products.map((product) => (
// 					<CardItems
// 						key={product.id}
// 						id={product.id}
// 						image={product.image}
// 						title={product.title}
// 						category={product.category}
// 						price={product.price}
// 					/>
// 				))}
// 			</Container>
// 		</>
// 	);
// };
// export default ItemListContainer;
