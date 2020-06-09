import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
//import { addItem } from '../actions/itemActions';

class CentreModal extends Component {
    state = {
        modal: false,
        placeName: '',
        phoneNumber: 0,
        email: '',
        address: '',
        embeddedURL: '',
        options: [],
        msg: null
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkChange = (e) => {
        const options = [...this.state.options]
        let index

        if (e.target.checked) {
            options.push(e.target.value)
        } else {
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
        }

        options.sort()

        this.setState({ options: options })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { placeName, phoneNumber, email, address, embeddedURL, options } = this.state;
        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const validnumeric = /^\d+$/;
        let valid = true;

        if (!placeName && valid) {
            this.setState({ msg: "Place Name field cannot be empty!" });
            valid = false;
        }
        if ((!validnumeric.test(phoneNumber) || phoneNumber.length !== 10) && valid) {
            this.setState({ msg: 'Invalid phoneNumber' })
            valid = false
        }
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email' })
            valid = false
        }
        if (!address && valid) {
            this.setState({ msg: 'Address field cannot be empty' })
            valid = false
        }
        if (!embeddedURL && valid) {
            this.setState({ msg: 'EmbeddedURL field cannot be empty' })
            valid = false
        }
        if (options.length === 0 && valid) {
            this.setState({ msg: 'No Course Selected' })
            valid = false
        }
        if (valid) {
            const newCentre = {
                placeName: placeName,
                phoneNumber: phoneNumber,
                email: email,
                address: address,
                embeddedUrl: embeddedURL,
                courseOffered: options
            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'x-auth-token': localStorage.getItem('token')
                }
            }

            axios.post('/api/centre', newCentre, config)
                .then(
                    this.toggle(),
                    this.setState({ msg: null, placeName: '', phoneNumber: 0, email: '', address: '', embeddedURL: '', coursesOffered: [] })
                )
                .catch(err =>
                    this.setState({ msg: "Something went wrong, try again!" })
                )

        }
    }

    render() {
        const { courses } = this.props.courses;
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Centre
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-lg"
                >
                    <ModalHeader toggle={this.toggle}>Add To Centres</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label for="placeName">Place Name</Label>
                                <Input
                                    type="text"
                                    name="placeName"
                                    id="placeName"
                                    placeholder="Place Name"
                                    onChange={this.onChange}
                                    className="mb-3"
                                >
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input
                                            type="number"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder="Phone Number"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={this.onChange}
                                            className="mb-3" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="Address"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="URL">Map EmbeddedURL</Label>
                                        <Input
                                            type="text"
                                            name="embeddedURL"
                                            id="embeddedURL"
                                            placeholder="Map EmbeddedURL"
                                            onChange={this.onChange}
                                            className="mb-3" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="Courses">Courses Offered</Label>
                            </FormGroup>
                            {courses.map(({ _id, courseName }) => (
                                <FormGroup check inline key={_id}>
                                    <Label check>
                                        <Input type="checkbox" value={courseName} onChange={this.checkChange} className="mb-3" /> {courseName}
                                    </Label>
                                </FormGroup>
                            ))}
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >
                                Add Centre
                                </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    courses: state.courses
})

export default connect(mapStateToProps)(CentreModal);