const AddQtyCart = ({ props }) => {
	return (
		<div className="addQtyCart">
			<span>Qty:</span>
			<div>
				<button id="remove">-</button>
				<span className="qtyText">{props}</span>
				<button id="add">+</button>
			</div>
		</div>
	);
};

export default AddQtyCart;
