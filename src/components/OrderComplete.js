import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const OrderComplete = ({ onClick }) => {
	return (
		<>
			<Row>
				<Col>Your order has been placed. Thank you!</Col>
			</Row>
			<Row>
				<Col>
					<Button onClick={onClick}>Continue Shopping</Button>
				</Col>
			</Row>
		</>
	);
};

export default OrderComplete;
