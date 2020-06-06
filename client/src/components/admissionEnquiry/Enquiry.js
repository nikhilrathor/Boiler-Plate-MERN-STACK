import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { courseForEnquiry } from '../../actions/coursesActions';
import axios from 'axios';

class AdmissionEnquiry extends Component {
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        msg: null,
        sent: 'false'
    };

    componentDidMount() {
        this.props.courseForEnquiry(localStorage.getItem('courseForEnquiry'));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, city, phoneNumber } = this.state;
        const courseName = localStorage.getItem('courseForEnquiry');
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
        if (!city && valid) {
            this.setState({ msg: 'City field cannot be empty', sent: 'false' })
            valid = false
        }
        if (valid) {
            const user = {
                name,
                email,
                phoneNumber,
                courseName,
                city
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/mail/quick-enquiry', user, config)
            this.setState({ msg: 'Mail sent!', sent: 'true' })
        }
    }

    render() {
        return (
            <Container className='mt-5'>
                <h1 className="text-center">Quick Enquiry</h1>
                <h3 className="text-center">COURSE: {this.props.selectedCourse}</h3>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron>
                            {this.state.msg ? (<Alert color={this.state.sent === 'true' ? 'success' : 'danger'}>{this.state.msg}</Alert>) : null}
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="Enter your name" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneno">Phone Number</Label>
                                    <Input type="number" name="phoneNumber" id="phoneno" placeholder="Enter your phone no" onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input type="text" name="city" id="city" placeholder="Enter your city" onChange={this.onChange} />
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

const mapStateToProps = state => ({
    selectedCourse: state.courses.courseForEnquiry
})

export default connect(mapStateToProps, { courseForEnquiry })(AdmissionEnquiry);