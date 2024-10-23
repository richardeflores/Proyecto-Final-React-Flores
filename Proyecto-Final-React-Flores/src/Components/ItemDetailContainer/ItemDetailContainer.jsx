import { useParams } from "react-router-dom";
import Spinner from "../Loader/Loading";
import ItemDetailed from "../ItemDetail/ItemDetailed";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const id = useParams().id;

	useEffect(() => {
		const docRef = doc(db, "items", id);
		getDoc(docRef).then((resp) => {
			setItem({ ...resp.data(), id: resp.id });
		});
	}, [id]);

	return (
		<>
			<ItemDetailed {...item} />
		</>
	);
};
export default ItemDetailContainer;
