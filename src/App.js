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

function App() {
    return (
        <div className="App">
            <Navbar bg="white" expand="lg" sticky="top" className="nav">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={"http://www.mentorszone.in/images/logot.png"}
                            width="280"
                            className="d-inline-block align-top"/>{''} {/* Education App */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className=" justify-content-end"
                            style={{
                            width: "100%"
                        }}>
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <NavDropdown title="Distance Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">BCA</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.2">MCA</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.3">BBA</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Regular Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">BCA</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.2">MCA</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.3">BBA</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Study in Abroad</Nav.Link>

                            <Nav.Link href="#link">Top Universities</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row
                style={{
                backgroundImage: "http://localhost:3000/assets/shape.png",
                padding: "0 20px 0 20px",
                maxHeight: "100px"
            }}>
                <Col xs={6}>
                    <h3
                        style={{
                        marginTop: "20%"
                    }}
                        className="title-text">Upgrage your learningSkills & Upgare your Life</h3>
                    <Button variant="primary" className="enquery-btn">Enquire Now</Button>{' '}
                </Col>
                <Col xs={6}>
                    <img alt="" loading="lazy" src={window.location.origin + '/assets/men.png'} // width="100%"
                        // height="250px" 
                        style={{
                    }} className="d-inline-block align-top"/>
                </Col>

            </Row>
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
        </div>
    );
}

export default App;
