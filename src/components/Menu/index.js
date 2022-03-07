import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Item from "./Item";

function Menu ({ handleAdd, checkingOut }) {

	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		fetch("/menu")
			.then((res) => res.json())
			.then((data = []) => {
				setMenuItems(data);
			});
	}, [setMenuItems]);

	return (
		<Col sm={8}>
			<Row>
				<h4>Menu</h4>
			</Row>
			{menuItems.map((menuItem) => (
				<Item key={menuItem.id} item={menuItem} onClick={handleAdd} disabled={checkingOut}/>
			))}
		</Col>
	);
};

export default Menu;
