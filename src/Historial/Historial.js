import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { Container, Row, Col, Card, Image, ListGroup, Table } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Historial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            selectedItem: -1,
            selectedEmotion: ""
        }
        Axios.get(variables.api_gateway_url + "/recomendaciones/historial?email=" + localStorage.getItem("user-email"))
        .then(response => {
            this.setState({
                 recomendaciones: response.data.data
            })
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
                                                        <ListGroup.Item key={item.id} onClick={
                                                            () => {
                                                                Axios.get(variables.api_gateway_url + "/recomendaciones/historial/recomendacion?foto=" + item.foto)
                                                                .then(response => {
                                                                    this.setState({
                                                                        selectedItem: response.data,
                                                                        selectedEmotion: item.emocion
                                                                    })
                                                                }).catch(error => {
                                                                    console.log(error)
                                                                    this.setState({
                                                                        selectedItem: -1
                                                                    })
                                                                })
                                                            }
                                                        }>
                                                            <Row>
                                                                <Col md={3}>
                                                                    <Image 
                                                                        src={variables.s3_files_url + item.foto}
                                                                        rounded
                                                                        height="100" />
                                                                </Col>
                                                                <Col md={9}>
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
                            {
                                this.state.selectedItem !== -1 ? (
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col md={4}>
                                                    <Image 
                                                        src={variables.s3_files_url + this.state.selectedItem.foto}
                                                        rounded
                                                        height="100" />
                                                </Col>
                                                <Col md={8}>
                                                    <h2>En ese momento estabas: {this.state.selectedEmotion}</h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Table responsive striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Nombre</th>
                                                            <th>Artista</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Array.isArray(this.state.selectedItem.canciones) ? this.state.selectedItem.canciones.map((track) => {
                                                                return (<tr key={track.id} >
                                                                    <td>{track.nombre}</td>
                                                                    <td>{track.artista}</td>
                                                                </tr>)
                                                                
                                                        }) : (<tr>
                                                            <td>

                                                            </td>
                                                        </tr>)
                                                        }
                                                    </tbody>
                                                </Table>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ) : null
                            }
                            
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Historial