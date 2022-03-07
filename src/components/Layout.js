import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Scrum Cafe</h1>
				</Col>
			</Row>
			<Row>{children}</Row>
		</Container>
	);
};

export default Layout;
