import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { Container, Row, Col, Card } from 'react-bootstrap'

class Recomendacion extends Component {
    render() {
        return (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Recomendacion