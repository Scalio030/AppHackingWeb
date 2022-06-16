import React from "react";
import {Container, Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import twitch from "../assets/twitch.png";
const Header = ({ setLogInOn}) => {
    return (
        <>
            <Navbar bg="light" variant="light" className="border-bottom border-3 border-dark p-1">
                <Container fluid className="m-0">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={twitch}
                            width="30"
                            height="35"
                            className="ms-1 d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href=""><Button variant="secondary" onClick={() => setLogInOn(true)}>Se connecter</Button></Nav.Link>
                            <Nav.Link href="#link"><Button variant="primary">S'inscrire</Button></Nav.Link>
                            <NavDropdown title="y" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Beginner package</NavDropdown.Item>
                                <NavDropdown.Divider className="m-0" />
                                <NavDropdown.Item href="#action/3.2">Roles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Wave management</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Weak & strong sides</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;