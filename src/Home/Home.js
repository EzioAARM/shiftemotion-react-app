import React, { Component } from 'react';
import Header from '../Layouts/Headers';
import { Container, Row, Col, Table, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Table responsive striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Artista</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Jacques (with ‪Tove Lo)
                                    </td>
                                    <td>
                                        Jax Jones, Tove Lo
                                    </td>
                                    <td style={{
                                        overflow: "visible"
                                    }}>
                                        <ButtonGroup>
                                            <DropdownButton 
                                                id="play-basic" 
                                                title="Reproducir">
                                                <Dropdown.Item 
                                                    eventKey="1"
                                                    href="spotify:track:69VE5kmfqG4dJSkrB1OtCI">
                                                        Abrir en Spotify Desktop
                                                </Dropdown.Item>
                                                <Dropdown.Item 
                                                    eventKey="2"
                                                    href="https://open.spotify.com/track/300YN8ebGB90nDuzgz0f3O?si=1YGtoDyWSryJZKPzAur4pQ" 
                                                    rel="noopener noreferrer" 
                                                    target="_blank">
                                                        Abrir en Spotify Web
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}

export default Home