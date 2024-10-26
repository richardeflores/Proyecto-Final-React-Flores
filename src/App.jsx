import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import { ProviderContext } from "./Components/Context/ProviderContext";
import { useState, createContext } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (item, qty) => {
		const itemAdded = { ...item, qty };
		const newCart = [...cart];
		const inCart = newCart.find((prod) => prod.id === itemAdded.id);

		if (inCart) {
			inCart.qty += qty;
		} else {
			newCart.push(itemAdded);
		}
		setCart(newCart);
	};

	const qtyInCart = () => {
		return cart.reduce((acc, prod) => acc + prod.qty, 0);
	};

	const listCartContext = createContext(null);

	const remove = (id) => {
		const updateList = cart.filter((product) => product.id !== id);
		setCart(updateList);
	};

	const totalPrice = () => {
		return cart.reduce((acc, prod) => acc + prod.price * prod.qty, 0);
	};

	const emptyCart = () => {
		setCart([]);
	};

	console.log(cart);

	return (
		<>
			<ProviderContext.Provider
				value={{
					cart,
					addToCart,
					qtyInCart,
					listCartContext,
					remove,
					totalPrice,
					emptyCart,
				}}>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route
							main
							path="/Proyecto-Final-React-Flores/"
							element={<ItemListContainer />}
						/>
						<Route
							path="/Proyecto-Final-React-Flores/contacto"
							element={<Contacto />}
						/>
						<Route
							path="/Proyecto-Final-React-Flores/item/:id"
							element={<ItemDetailContainer />}
						/>
						<Route
							path="/Proyecto-Final-React-Flores/category/:idCategory"
							element={<ItemListContainer />}
						/>
						<Route
							path="/Proyecto-Final-React-Flores/cart"
							element={<Cart />}
						/>
					</Routes>
				</BrowserRouter>
			</ProviderContext.Provider>
		</>
	);
}

export default App;
