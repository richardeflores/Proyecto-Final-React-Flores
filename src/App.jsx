import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import { ShopProvider } from "./Components/Context/ProviderContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
	return (
		<>
			<ShopProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route main path="/" element={<ItemListContainer />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route
							path="/category/:idCategory"
							element={<ItemListContainer />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</ShopProvider>
		</>
	);
}

export default App;
