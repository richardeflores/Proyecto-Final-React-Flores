import "./ItemListContainer.css";
import CardItems from "../ItemList/CardItems";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	const category = useParams().category;

	useEffect(() => {
		const productsRef = collection(db, "items");
		const q = category
			? query(productsRef, where("category", "==", category))
			: productsRef;
		getDocs(q).then((res) => {
			setProducts(
				res.docs.map((product) => {
					return { ...product.data(), id: product.id };
				})
			);
		});
	}, [category]);

	return (
		<>
			<Container>
				{products.map((product) => (
					<CardItems
						key={product.id}
						id={product.id}
						image={product.image}
						title={product.title}
						category={product.category}
						price={product.price}
					/>
				))}
			</Container>
		</>
	);
};
export default ItemListContainer;
