import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { FilePond } from 'react-filepond'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Recomendar extends Component {

    state = {
        showResult: false,
        imageResponse: {}
    }

    render() {
        return (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            {
                                this.state.showResult ? (
                                    <Card>
                                        <Card.Header>
                                            Resultado
                                        </Card.Header>
                                        <Card.Body>
                                            <h2>Logramos identificar que te encuentras: </h2>
                                            <Row>
                                                <Col>
                                                    <Table>
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Nombre
                                                                </th>
                                                                <th>
                                                                    Artista
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.imageResponse.tracks.map(track => {
                                                                    return (
                                                                    <tr key={track.id} onClick={
                                                                        () => {
                                                                            var win = window.open("https://open.spotify.com/track/" + track.id, '_blank');
                                                                            win.focus();
                                                                        }
                                                                    }>
                                                                        <td>{track.name}</td>
                                                                        <td>{track.artists}</td>
                                                                    </tr>)
                                                                })
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ) : 
                                (<Card>
                                    <Card.Header>
                                        Elige una foto
                                    </Card.Header>
                                    <Card.Body>
                                        <FilePond allowFileEncode={true} allowImagePreview={true} allowMultiple={false} server={{
                                            process: (fieldName, file, metadata, load, error, progress, abort) => {
                                                console.log(fieldName)
                                                var data = new FormData()
                                                data.append('file', file)
                                                data.append('userID', localStorage.getItem('user-email'))
                                                Axios({
                                                    method: 'post',
                                                    url: variables.load_balancer_url + "/upload",
                                                    headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                    },
                                                    data: data
                                                }).then(response => {
                                                    console.log(response.data)
                                                    this.setState({
                                                        imageResponse: response.data,
                                                        showResult: true
                                                    })
                                                    load(file.name)
                                                }).catch(error => {
                                                    console.log(error)
                                                    abort()
                                                })
                                            }
                                        }}>
    
                                        </FilePond>
                                    </Card.Body>
                                </Card>)
                            } 
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Recomendar