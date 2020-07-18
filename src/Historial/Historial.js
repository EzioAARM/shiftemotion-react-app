import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Historial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
        Axios.get(variables.api_gateway_url + "/recomendaciones/historial?email=" + localStorage.getItem("user-email"))
        .then(response => {
            this.setState({
                 recomendaciones: response.data
            })
            console.log(JSON.parse(response.data))
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return (<div>
                <Header />
                <br />
                <Container fluid>
                    <Row>
                        <Col md="3">
                            <Card>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        {
                                            Array.isArray(this.state.recomendaciones) ? 
                                            (
                                                this.state.recomendaciones.map(item => {
                                                    return (
                                                        <ListGroup.Item>
                                                            <Row>
                                                                <Col>
                                                                <Image 
                                                                    src={variables.s3_files_url + item.foto}
                                                                    rounded
                                                                    height="150" />
                                                                </Col>
                                                                <Col>
                                                                    <Row>
                                                                        <Col>{item.emocion}</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><small className="text-muted">id: {item.id}</small></Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                            
                                                        </ListGroup.Item>
                                                    )
                                                })
                                            ) : <ListGroup.Item>
                                                <span className="text-muted">No se encontraron recomendaciones</span>
                                            </ListGroup.Item>
                                        }
                                        
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="9">
                            <Card>
                                <Card.Body>
                                    Canciones
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Historial