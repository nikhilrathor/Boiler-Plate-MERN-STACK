import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron, Alert } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';

class ReachOutToUs extends Component {
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        selectedCourse: 'Select a Course',
        msg: null,
        sent: 'false'
    };
    setCourse = (e) => {
        this.setState({
            selectedCourse: e.target.value
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, selectedCourse, phoneNumber } = this.state;
        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const validnumeric = /^\d+$/;
        let valid = true;
        if (!name && valid) {
            this.setState({ msg: 'Name field cannot be empty', sent: 'false' })
            valid = false
        }
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email', sent: 'false' })
            valid = false
        }
        if ((!validnumeric.test(phoneNumber) || phoneNumber.length !== 10) && valid) {
            this.setState({ msg: 'Invalid phoneNumber', sent: 'false' })
            valid = false
        }
        if (selectedCourse === 'Select a Course' && valid) {
            this.setState({ msg: 'Please select a course', sent: 'false' })
            valid = false
        }
        if (valid) {
            const user = {
                name,
                email,
                phoneNumber,
                selectedCourse
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/mail/reach-out', user, config)
            this.setState({ msg: 'Mail sent!', sent: 'true' })
        }
    }

    render() {
        const { courses } = this.props.courses;
        return (
            <Container className='mt-5'>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron>
                            <h1 className="text-center">Reach out to us</h1>
                            {this.state.msg ? (<Alert color={this.state.sent === 'true' ? 'success' : 'danger'}>{this.state.msg}</Alert>) : null}
                            <Form className='mt-5' onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="test" name="name" id="name" placeholder="Enter your name" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter yout email" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Phone Number</Label>
                                    <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="select" id="exampleSelect"
                                        onChange={this.setCourse}>
                                        <option>Select a Course</option>
                                        {courses.map(({ _id, courseName }) => (
                                            <option key={_id}>{courseName}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }
}

const mapStateToProps = (state) => ({
    courses: state.courses
})

export default connect(mapStateToProps)(ReachOutToUs);