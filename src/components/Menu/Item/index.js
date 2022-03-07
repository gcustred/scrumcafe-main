import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Styled from "./styles";
import { Form } from "react-bootstrap";
import { useState } from "react";


function Item({ item, onClick, disabled }) {

	// To keep track of the state of item customizations
	const [customizations, setItem] = useState(item.customizations);

	// method to handle any changes from the check boxes.
	const handleOnChange = (customOption) => {
		
		customOption.checked = !customOption.checked;
		const updatedCustomizations = [...customizations];

		item.customizations = [...updatedCustomizations];
		
		// update customizations state
		setItem(item.customizations);
	}

	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>				
				{customizations?.map((customization) => 
					<Styled.CustomizationItem key={customization.customizationDesc}>{customization.customizationDesc}
					{customization.customizationOptions?.map((customOption) => 
					<Form.Check
					type="checkbox"
					key={customOption.customName}
					label={customOption.customName}
					checked={customOption.checked}
					onChange={() => {
						handleOnChange(customOption);
					}}					
					/>)}</Styled.CustomizationItem>
				)}
			</Col>
			<Col sm="auto">
				<Button onClick={() => onClick(item)} disabled={disabled}>
					Add to cart
				</Button>
			</Col>
		</Styled.MenuItem>
	);	
};

export default Item;
