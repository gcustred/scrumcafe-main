import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ListGroup } from "react-bootstrap";

function Item ({ item, onClick, disabled }) {


	// properties I added - one is to list all the different customizations, 
	// another to hold the options
	const customizations = item.customizations;
	let options = [];
	console.log(customizations);

	// If there are any customizations, iterate through each, then iterate through the options.
	// This is being called twice, we should make it so its called once.
	if (customizations){
		customizations.forEach((customization) => {
			customization.customizationOptions.forEach((option) => {
				if (option.checked === true){
					options.push(option);
				}
			})
		})
	}

	return (
		<div>
			<Row>
				<hr/>
				<Col>{item.name}</Col>
				<Col sm="auto">Qty - {item.qty}</Col>
				<Col sm="auto">
					<Button variant="danger" onClick={() => onClick(item.id)} disabled={disabled}>
						Remove
					</Button>
				</Col>
			</Row>
			<ListGroup className="list-group list-group-flush">
			{options.map((option,index) => (
				<ListGroup.Item key={index + options.join()}>{option.customName}</ListGroup.Item>
			))}
			</ListGroup>
		</div>
	);
};

export default Item;
