import { useParams } from "react-router-dom";
import Spinner from "../../reestructuracion/Loader/Loading";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../reestructuracion/firebase/Config";
import { requestItemId } from "../helper/GetData";

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const id = useParams().id;

	useEffect(() => {
		requestItemId(Number(id)).then((res) => {
			setItem(res);
		});
	}, [id]);

	return <>{item && <ItemDetail item={item} />}</>;
};

// const ItemDetailContainer = () => {
// 	const [item, setItem] = useState(null);
// 	const id = useParams().id;

// 	useEffect(() => {
// 		const docRef = doc(db, "items", id);
// 		getDoc(docRef).then((resp) => {
// 			setItem({ ...resp.data(), id: resp.id });
// 		});
// 	}, [id]);

// 	return <>{item && <ItemDetail {...item} />}</>;
// };
export default ItemDetailContainer;
