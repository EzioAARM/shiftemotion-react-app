import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

class Headers extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ShiftEmotion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">
                                Inicio
                            </Nav.Link>
                            <Nav.Link href="/">
                                Recomendaciones
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Perfil" id="perfil-dropdown">
                                <NavDropdown.Item>Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Cerrar sesion</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Headers