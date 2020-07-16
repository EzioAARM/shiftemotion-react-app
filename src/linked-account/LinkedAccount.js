import React, { Component } from 'react';
import queryString from 'query-string';
import estilos_linked_account from './LinkedAccount.module.css'
import Axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import variables from '../globals'
import successImage from './../assets/img/success.gif'
import errorImage from './../assets/img/error.gif'

class LinkedAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card_header: "Vinculacion exitosa",
            card_body: " cuenta fue vinculada con exito",
            query_params: this.props.location.search,
            classNameButton: "btn btn-success",
            isSuccess: false
        }
        let params = queryString.parse(this.props.location.search)
        if (localStorage.getItem("spotify-token") === null) {
            if (params.code) {
                // Obtener el refresh token
                Axios.post('https://accounts.spotify.com/api/token', queryString.stringify({
                    "grant_type": "authorization_code",
                    "code": params.code,
                    "redirect_uri": variables.spotify_redirect
                }), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": "Basic " + variables.spotify_base64_codes
                    }
                }).then((refreshtoken_data) => {
                    console.log(refreshtoken_data)
                    // Enviar a dynamo los tokens
                    Axios.post(variables.api_gateway_url + '/login/token', {
                        token: refreshtoken_data.refresh_token
                    }).then((shiftemotion_data) => {
                        localStorage.setItem("user-mail", shiftemotion_data.correo);
                        this.setState({
                            card_header: "Vinculacion exitosa",
                            card_body: "¡Bienvenido! Estamos muy contentos que te unieras a nuestra gran familia de ShiftEmotion, ahorta puedes dirigirte a la aplicacion y disfrutar",
                            classNameButton: "btn btn-success",
                            isSuccess: true
                        })
                    }).catch((shiftemotion_error) => {
                        this.setState({
                            card_body: "Sucedio un error inesperado vinculando su cuenta",
                            card_header: "Hubo un error",
                            classNameButton: "btn btn-danger",
                            isSuccess: false
                        })
                    })
                }).catch((refreshtoken_error) => {
                    console.log(refreshtoken_error)
                    this.state = {
                        card_body: "Sucedio un error que no tuvimos en cuenta",
                        card_header: "Error",
                        classNameButton: "btn btn-danger",
                        isSuccess: false
                    }
                })
            } else if (params.error) {
                // No dio permisos
                this.state = {
                    card_body: "No pudimos acceder a tu cuenta debido a falta de permisos, esperamos que en otra ocasión podamos llevarnos mejor. ¡Te esperaremos!",
                    card_header: "No tenemos malas intenciones.",
                    classNameButton: "btn btn-danger",
                    isSuccess: false
                }
            }
        } else {
            this.state = {
                card_body: "Tu cuenta ya está asociada, no debes preocuparte por ingresar de nuevo. Puedes regresar al inicio con tranquilidad",
                card_header: "¿Te perdiste?",
                classNameButton: "btn btn-info",
                isSuccess: false
            }
        }
    }

    render() {
        return (
            <Container>
                <Router>
                    <Row>
                        <Col>
                            <Card className={[estilos_linked_account.o_hidden, estilos_linked_account.border_0, "my-5", "shadow-lg"].join(" ")}>
                                <Card.Body className={[estilos_linked_account.p_0].join(" ")}>
                                    <Row>
                                        {
                                            this.state.isSuccess === false ? (<Col lg="6" style={{
                                                backgroundImage: "url(" + errorImage + ")",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }} />) : (<Col lg="6" style={{
                                                backgroundImage: "url(" + successImage + ")",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }} />)
                                        }
                                        <Col lg="6" className={[estilos_linked_account.p_5].join(" ")}>
                                            <Card.Title>
                                                <h3>{this.state.card_header}</h3>
                                            </Card.Title>
                                            <Card.Text>
                                                {this.state.card_body}
                                            </Card.Text>
                                            <a href="/" className={this.state.classNameButton}>Ir al inicio</a>
                                        </Col>
                                    </Row>
                                    
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