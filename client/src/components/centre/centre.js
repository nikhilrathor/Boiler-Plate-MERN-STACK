import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Col, Container, Row, Jumbotron } from 'reactstrap';
import Iframe from 'react-iframe';
import { getCentreByPlace } from '../../actions/centreActions';
import { connect } from 'react-redux';
import './centre.css';

class Centre extends Component {
    componentDidMount() {
        this.props.getCentreByPlace(localStorage.getItem('centreForDetails'));
    }
    render() {
        const { centreDetails } = this.props.centreDetails;
        const { centreCourses } = this.props.centreDetails;
        const { placeName, phoneNumber, email, address, embeddedUrl } = centreDetails;
        return (
            <div className='mt-5'>
                <Jumbotron>
                    <h1 className="text-center">{placeName}</h1>
                    <hr></hr>
                    <Container>
                        <Row>
                            <Col>
                                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                                    <Toast>
                                        <ToastHeader>
                                            <h1>Courses Offered!</h1>
                                        </ToastHeader>
                                    </Toast>
                                </div>
                            </Col>
                        </Row>

                        <Row xs="2">
                            {centreCourses.map((item) => (
                                <Col>
                                    <div className="p-3 bg-info my-2 rounded">
                                        <Toast>
                                            <ToastBody>
                                                {item}
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                                    <Toast>
                                        <ToastHeader>
                                            <h1>Centre Location!</h1>
                                        </ToastHeader>
                                    </Toast>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="iframe-container">
                                    <Iframe src={embeddedUrl}></Iframe>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                                <Toast>
                                    <ToastHeader>
                                        <h1>Contact Info!</h1>
                                    </ToastHeader>
                                </Toast>
                            </div>
                        </Row>
                            <div className="p-3 bg-info my-2 rounded">
                                <Toast>
                                    <ToastBody>
                                        <ul>
                                            <li>
                                                {phoneNumber}
                                            </li>
                                            <li>
                                                {email}
                                            </li>
                                            <li>
                                                {address}
                                            </li>
                                        </ul>
                                    </ToastBody>
                                </Toast>
                            </div>
                        
                    </Container>
                </Jumbotron>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    centreDetails: state.centres
})

export default connect(mapStateToProps, { getCentreByPlace })(Centre);