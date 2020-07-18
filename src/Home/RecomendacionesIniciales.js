import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap';
import Axios from 'axios'


class RecomendacionesIniciales extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            })
        }
    }

    renderRecommendation() {
        try {
            const contenido = this.state.recomendaciones.map((track) => {
                return (<tr key={track.id}>
                   <td>{track.name}</td>
                   <td>{track.artist}</td>
               </tr>)
           })
            this.setState({
                filas: contenido
            })
        } catch (e) {
            this.setState({
                filas: (<tr>
                    <th colSpan="2">
                        No se pudieron recomendar canciones
                    </th>
                </tr>)
            })
        }
    }

    render() {
        return (<Card>
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
                            this.state.recomendaciones.map((track) => {
                                return (<tr key={track.id} onClick={
                                    () => {
                                        var win = window.open("https://open.spotify.com/track/" + track.id, '_blank');
                                        win.focus();
                                    }
                                }>
                                   <td>{track.name}</td>
                                   <td>{track.artist}</td>
                               </tr>)
                           })
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>);
    }
} 

export default RecomendacionesIniciales