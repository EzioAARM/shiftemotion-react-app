import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { FilePond } from 'react-filepond'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Recomendar extends Component {

    state = {
        showResult: false
    }

    render() {
        return (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                (<Card.Header>
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
                                                load(file.name)
                                            }).catch(error => {
                                                console.log(error)
                                                abort()
                                            })
                                        }
                                    }}>

                                    </FilePond>
                                </Card.Body>)
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Recomendar