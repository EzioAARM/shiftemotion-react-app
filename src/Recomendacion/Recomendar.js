import React, { Component } from 'react'
import Header from './../Layouts/Headers'
import { FilePond, registerPlugin } from 'react-filepond'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Axios from 'axios'
import variables from '../globals'

class Recomendar extends Component {

    render() {
        return (<div>
                <Header />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    Elige una foto
                                </Card.Header>
                                <Card.Body>
                                    <FilePond allowImagePreview={true} allowMultiple={false} server={{
                                        process: (fieldName, file, metadata, load, error, progress, abort) => {
                                            Axios.post(variables.load_balancer_url + "/", file, {
                                                headers: {
                                                  'Content-Type': 'multipart/form-data'
                                                }
                                            }).then(data => {
                                                console.log(data)
                                            })
                                        }
                                    }}>

                                    </FilePond>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>)
    }
}

export default Recomendar