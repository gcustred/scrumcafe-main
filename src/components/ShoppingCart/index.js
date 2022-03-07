import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Item from "./Item";

const ShoppingCart = ({ cart, handleCheckout, handleDelete, checkingOut }) => {
	return (
		<Col sm={4}>
			<Row>
				<h4>Shopping Cart</h4>
			</Row>
			{cart.map((cartItem) => (
				<Item key={cartItem.id} item={cartItem} onClick={handleDelete} disabled={checkingOut} />
			))}
			{cart.length > 0 ? (
				<Row>
					<Button onClick={handleCheckout} disabled={checkingOut}>
						{checkingOut ? "Processing..." : "Checkout"}
					</Button>
				</Row>
			) : (
				<Row>
					<Col>Cart is empty</Col>
				</Row>
			)}
		</Col>
	);
};

export default ShoppingCart;
