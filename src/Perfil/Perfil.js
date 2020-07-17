import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            correo: ""
        }
        if (localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null) {
            Axios.get(variables.api_gateway_url + "/perfil?email=" + localStorage.getItem("user-email"))
            .then((data) => {
                console.log(data)
                this.setState({
                    nombre: data.data.name,
                    correo: data.data.email
                })
            })
        }
    }

    render() {
        return (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Nombre: </strong> {this.state.nombre}
                                        <br />
                                        <strong>Correo electronico: </strong> {this.state.correo}
                                    </Card.Text>
                                    <p className="text-muted text-right">Puedes administrar tu informacion personal haciendo clic <a href="https://www.spotify.com/gt/account/overview/" variant="success" rel="noopener noreferrer" target="_blank">aqui</a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Perfil