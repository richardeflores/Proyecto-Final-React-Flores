import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ qty, handleRestar, handleSumar, handleAgregar }) => {
	return (
		<div>
			<div className="item-count">
				<Button variant="secondary" onClick={handleRestar}>
					-
				</Button>
				<p className="qty">{qty}</p>
				<Button variant="secondary" onClick={handleSumar}>
					+
				</Button>
			</div>
			<Button
				variant="primary"
				className="agregar-al-carrito"
				onClick={handleAgregar}>
				Agregar al carrito
			</Button>
		</div>
	);
};
export default ItemCount;
