import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailed from "./Components/ItemDetail/ItemDetailed";
import Contacto from "./Components/Contacto/Contacto";
import ProviderContextCart from "./Components/Context/ProviderContextCart";

function App() {
	return (
		<ProviderContextCart>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route main path="/" element={<ItemListContainer />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/item/:id" element={<ItemDetailed />} />
					<Route path="/category/:idCategory" element={<ItemListContainer />} />
				</Routes>
			</BrowserRouter>
		</ProviderContextCart>
	);
}

export default App;
