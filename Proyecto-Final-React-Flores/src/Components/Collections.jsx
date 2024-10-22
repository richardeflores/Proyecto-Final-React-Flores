import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useEffect } from "react";

function Collections() {
	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		getDocs(itemsCollection).then((snapshot) => {
			const items = snapshot.docs.map((doc) => doc.data());
			console.log(items);
		});
	});

	return <div>Collections</div>;
}

export default Collections;
