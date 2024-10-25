import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./Components/Contacto/Contacto";
import { CartProvider } from "./Components/Context/ProviderContext";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route main path="/" element={<ItemListContainer />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/category/:category" element={<ItemListContainer />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
