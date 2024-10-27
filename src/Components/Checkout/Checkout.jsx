import React, { useContext, useState } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/Config";
import "../Contacto/Contacto";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Checkout = () => {
	const [pedidoId, setPedidoId] = useState("");

	const { cart, totalPrice, emptyCart } = useContext(ProviderContext);

	const { register, handleSubmit } = useForm();

	const comprar = (data) => {
		const pedido = {
			cliente: data,
			productos: cart,
			total: totalPrice(),
		};

		const pedidosRef = collection(db, "pedidos");

		addDoc(pedidosRef, pedido).then((doc) => {
			setPedidoId(doc.id);
			emptyCart();
		});
	};

	if (pedidoId) {
		return (
			<Container>
				<h1 className="main-title">Muchas gracias por tu compra</h1>
				<Row>Tu número de pedido es: {pedidoId}</Row>
			</Container>
		);
	}

	return (
		<Container className="contenedorFormulario">
			<Row>
				<h1 className="tituloFormulario">Finalizar Compra</h1>
			</Row>
			<Row>
				<Form onSubmit={handleSubmit(comprar)}>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="name"
							placeholder="Enter name"
							{...register("nombre")}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							{...register("email")}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPhone">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="phone"
							placeholder="Phone"
							{...register("phone")}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Comprar
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Checkout;
