import React, { Component } from 'react';
import estilos_login from './Login.module.css';
import listening_gif from './../assets/img/listening.gif'
import spotify_logo from './../assets/img/spotify.svg'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Axios from 'axios';

class Login extends Component {
    spotifyLogin = () => {
        var scopes = 'user-read-private user-read-email user-library-read'
        Axios.get(`https://accounts.spotify.com/authorize?client_id=
            ${process.env.REACT_APP_SPOTIFY_CLIENT}&response_type=code&redirect_uri=
            ${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=${scopes}&state=state`)
            .then((data) => {
                console.log("Se envio a spotify")
            })
    }

    render() {
        return (<Container>
            <Row className="justify-content-md-center">
              <Col xl="10" lg="12" md="9">
                <Card className={[estilos_login.o_hidden, estilos_login.border_0, "my-5", "shadow-lg"].join(" ")}>
                  <Card.Body className={[estilos_login.p_0].join(" ")}>
                    <Row>
                      <Col lg="6" style={{
                          backgroundImage: "url(" + listening_gif + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                      }}>
                      </Col>
                      <Col lg="6" className={[estilos_login.p_5].join(" ")}>
                        <Row>
                            <Col md="12">
                                <h1 className="text-center">
                                    Bienvenido
                                </h1>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p className="text-muted">
                                    Para acceder a la plataforma es necesario que accedas con tu cuenta de Spotify
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md="6" className="text-center">
                                <img src={spotify_logo} width="80" height="80" alt="Logo de spotify" />
                            </Col>
                            <Col md="6" className="text-center">
                                <Button variant="success" onClick={
                                    () => {
                                        this.spotifyLogin()
                                    }
                                }>
                                    Iniciar sesion con Spotify
                                </Button>
                            </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>);
    }
}

export default Login;