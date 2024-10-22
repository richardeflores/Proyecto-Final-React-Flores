import FetchSimulation from "../../FetchSimulation";
import products from "../Products/products";
import { useParams } from "react-router-dom";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";
import { useState } from "react";
import { useEffect } from "react";

function DetailedCard() {
	const [data, SetData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		FetchSimulation(
			products.find((filtered) => filtered.id == Number(id)),
			1000
		)
			.then((response) => SetData(response))
			.catch((error) => console.log(error));
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
