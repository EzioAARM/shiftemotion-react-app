import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'
import Loader from '../Layouts/Loader'

class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
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
            }).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render() {
        return this.state.isLoading ? <Loader /> : (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    Informacion personal
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Nombre: </strong><br /> {this.state.nombre}
                                        <br />
                                        <strong>Correo electronico: </strong><br /> {this.state.correo}
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