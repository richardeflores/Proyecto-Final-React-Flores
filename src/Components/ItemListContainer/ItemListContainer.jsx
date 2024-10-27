import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import { getData } from "../helper/GetData";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/Config";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [title, setTitle] = useState("Productos");
	const category = useParams().idCategory;

	useEffect(() => {
		const productsRef = collection(db, "items");
		const q = category
			? query(productsRef, where("category", "==", category))
			: productsRef;
		getDocs(q).then((res) => {
			setProducts(
				res.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			);
		});
	}, [category]);

	return (
		<Container>
			<ItemList products={products} category={category} />
		</Container>
	);
};

export default ItemListContainer;
