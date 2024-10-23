import "./ItemListContainer.css";
import CardItems from "../ItemList/CardItems";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
	const [data, SetData] = useState([]);
	let { idCategory } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		getDocs(itemsCollection).then((snapshot) => {
			const items = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			SetData(items);
		});
	}, [idCategory]);

	return (
		<>
			<Container>
				{data.map((products) => (
					<CardItems
						key={products.id}
						id={products.id}
						image={products.image}
						title={products.title}
						category={products.category}
						price={products.price}
					/>
				))}
			</Container>
		</>
	);
};
export default ItemListContainer;
