import './App.css';
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Row,
    Col,
    Button,
    Card
} from 'react-bootstrap';
// import { fadeIn } from 'react-animations'

function Services() {
    return (
        <div className="App">
           
            <Row
                style={{
                backgroundImage: "http://localhost:3000/assets/shape.png",
                padding: "0 20px 0 20px",
                maxHeight: "100px"
            }}>
                <Col xs={4}>
                <Card style={{
                        width: '18rem'
                    }}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
           
        </div>
    );
}

export default Services;
