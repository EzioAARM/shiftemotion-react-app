import React, { Component } from 'react';
import queryString from 'query-string';
import Axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import variables from '../globals'

class LinkedAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card_header: "Vinculacion exitosa",
            card_body: " cuenta fue vinculada con exito",
            query_params: this.props.location.search
        }
        if (localStorage.getItem("spotify-token") === null) {
            let params = queryString.parse(this.props.location.search)
            //localStorage.setItem("spotify-token", params.code);
            Axios.post(variables.api_gateway_url + '/login/token', {
                token: params.code
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            this.state = {
                card_body: "Ya existe una cuenta vinculada en la sesion actual",
                card_header: "Hubo un error"
            }
        }
    }

    render() {
        return (
            <Container>
                <Router>
                    <Row>
                        <Col>
                            <Card className="my-5 shadow-lg">
                                <Card.Body>
                                    <Card.Title>
                                        {this.state.card_header}
                                    </Card.Title>
                                    <Card.Text>
                                        {this.state.card_body}
                                    </Card.Text>
                                    <a href="/home" className="btn btn-primary">Ir al inicio</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Router>
            </Container>
        );
    }
}

export default LinkedAccount