import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useLocalStorageState } from "ahooks";

import Layout from "./components/Layout";
import Menu from "./components/Menu";
import ShoppingCart from "./components/ShoppingCart";
import OrderComplete from "./components/OrderComplete";

function App() {
	const [cart, setCart] = useLocalStorageState("cart", []);
	const [checkingOut, setCheckingOut] = useState(false);
	const [complete, setComplete] = useState(false);

	const handleAdd = (menuItem) => {

		// Make new array
		const options = new Array();
		const updatedCart = [...cart];
		
		// Iterate through the new customizations, then iterate through the options. If its checked, add it to the array.
		menuItem.customizations?.forEach((customization) => {
			customization.customizationOptions.forEach((option) => {
				if (option.checked === true){
					options.push(option.customName);
				}
			})
		});

		// Get the id of the menu item.
		const id = menuItem.id.toString();

		// We need to get the id if it has any hyphens, this probably isn't needed (at least not a new variable)
		const newid = id.split("-")[0];

		// Set menuitem id based on options
		menuItem.id = newid + '-' + options.join();

		const index = cart.findIndex((cartItem) => cartItem.id === menuItem.id);

		if (index >= 0) {

			const cartItem = updatedCart[index];
			updatedCart.splice(index, 1, {
				...cartItem,
				qty: cartItem.qty + 1,
			});
			// cart is updating without calling this?
			setCart(updatedCart);
		} else {
			setCart((prev) => {
				return [...prev, { ...menuItem, qty: 1 }]
			} );
		}
	};

	const handleDelete = (id) => setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));

	const handleCheckout = () => {
		setCheckingOut(true);
		fetch("/checkout", {
			method: "post",
			body: JSON.stringify(cart),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(() => {
				setComplete(true);
			})
			.finally(() => {
				setCheckingOut(false);
			});
	};

	const handleReset = () => {
		setCart([]);
		setComplete(false);
	};

	return (
		<Layout>
			{complete ? (
				<OrderComplete onClick={handleReset} />
			) : (
				<>
					<Menu handleAdd={handleAdd} checkingOut={checkingOut} />
					<ShoppingCart
						cart={cart}
						handleCheckout={handleCheckout}
						handleDelete={handleDelete}
						checkingOut={checkingOut}
					/>
				</>
			)}
		</Layout>
	);
}

export default App;
