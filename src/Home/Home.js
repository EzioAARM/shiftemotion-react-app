import React, { Component } from 'react';
import Header from '../Layouts/Headers'
import Axios from 'axios'
import { Row, Col, Container, Card, Table } from 'react-bootstrap';
import Loader from '../Layouts/Loader'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            recomendaciones: [
                {
                    id: "",
                    name: "",
                    artist: ""
                }
            ],
            filas: (<tr>
                <th colSpan="2">
                    No se pudieron recomendar canciones
                </th>
            </tr>)
        }
        if (localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null) {
            Axios.get('https://8m717iy4bh.execute-api.us-east-1.amazonaws.com/Prod/recomendaciones/home?email=' + localStorage.getItem("user-email"))
            .then((data) => {
                this.setState({
                    recomendaciones: data.data.tracks
                })
            })
            .catch((error) => {
                this.setState({
                    recomendaciones: [
                        {
                            id: "",
                            name: "",
                            artist: ""
                        }
                    ]
                })
            }).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render() {
        return this.state.isLoading ? <Loader /> : (
        <div>
            <Header />
            <br />
            <Container fluid>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table responsive striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Artista</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array.isArray(this.state.recomendaciones) ? this.state.recomendaciones.map((track) => {
                                                return (<tr key={track.id} onClick={
                                                    () => {
                                                        var win = window.open("https://open.spotify.com/track/" + track.id, '_blank');
                                                        win.focus();
                                                    }
                                                }>
                                                    <td>{track.name}</td>
                                                    <td>{track.artist}</td>
                                                </tr>)
                                                
                                        }) : (<tr>
                                            <td>

                                            </td>
                                        </tr>)
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>);
    }
}

export default Home