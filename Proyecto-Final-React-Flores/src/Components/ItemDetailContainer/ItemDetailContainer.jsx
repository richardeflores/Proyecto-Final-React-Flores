import { useParams } from "react-router-dom";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function DetailedCard() {
	const [data, SetData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		getDocs(itemsCollection).then((snapshot) => {
			const items = snapshot.docs.map((doc) => doc.data());
			SetData(items);
		});
	}, [id]);

	return data.length === 0 ? (
		<Spinner />
	) : (
		<>
			<ItemDetailed product={data} />
		</>
	);
}
export default DetailedCard;
