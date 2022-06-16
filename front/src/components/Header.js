import React from "react";
import {Container, Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import twitch from "../assets/twitch.png";
import AuthService from "../services/AuthService";

const Header = ({ setLogInOn, setSignUpOn, auth}) => {

    const onDeconnect = (id) => {
        AuthService.logout(id).then(
        ).catch(error => console.log(error));
    }

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
                            { auth ?
                                <Nav.Link href="">
                                    <Button variant="primary" onClick={() => onDeconnect()}>
                                        Deconnect
                                    </Button>
                                </Nav.Link>
                                :
                                <>
                                    <Nav.Link href="">
                                        <Button variant="secondary" onClick={() => setLogInOn(true)}>
                                            Log In
                                        </Button>
                                    </Nav.Link>
                                    <Nav.Link href="">
                                        <Button variant="primary" onClick={() => setSignUpOn(true)}>
                                            Sign In
                                        </Button>
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;