import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Contacto.css";

const Contacto = () => {
	const { register, handleSubmit } = useForm();

	const enviar = (data) => {
		console.log(data);
	};

	return (
		<Container className="contenedorFormulario">
			<Row>
				<h1 className="tituloFormulario">Contacto</h1>
			</Row>
			<Row>
				<Form onSubmit={handleSubmit(enviar)}>
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
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Contacto;
