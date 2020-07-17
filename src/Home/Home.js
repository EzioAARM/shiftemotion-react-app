import React, { Component } from 'react';
import Header from '../Layouts/Headers';
import { Row, Col, Container } from 'react-bootstrap';
import RecomendacionesIniciales from './RecomendacionesIniciales'

class Home extends Component {
    render() {
        return (
        <div>
            <Header />
            <br />
            <Container fluid>
                <Row>
                    <Col>
                        <RecomendacionesIniciales />
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}

export default Home