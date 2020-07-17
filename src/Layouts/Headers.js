import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

class Headers extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">ShiftEmotion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/recomendar">
                                Recomendar
                            </Nav.Link>
                            <Nav.Link href="/historial">
                                Historial
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown drop="left" as="ButtonGroup" title="Perfil" id="perfil-dropdown">
                                <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/" onClick={
                                    () => {
                                        localStorage.removeItem('user-email')
                                        localStorage.removeItem('shiftemotiontoken')
                                    }
                                }>Cerrar sesion</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Headers