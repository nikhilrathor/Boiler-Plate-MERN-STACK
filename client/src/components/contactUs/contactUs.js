import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron, Alert } from 'reactstrap';
import axios from 'axios';

class ContactUs extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        msg: null,
        sent: 'false'
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = this.state;
        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let valid = true;
        if (!name && valid) {
            this.setState({ msg: 'Name field cannot be empty', sent: 'false' })
            valid = false
        }
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email', sent: 'false' })
            valid = false
        }
        if (!subject && valid) {
            this.setState({ msg: 'Subject field cannot be empty', sent: 'false' })
            valid = false
        }
        if (!message && valid) {
            this.setState({ msg: 'Message field cannot be empty', sent: 'false' })
            valid = false
        }
        if (valid) {
            const user = {
                name,
                email,
                subject,
                message
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/mail/contact-us', user, config)
            this.setState({ msg: 'Mail sent!', sent: 'true' })
        }
    }

    render() {
        return (
            <Container className='mt-5'>
                <h1 className="text-center">Contact Us</h1>
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
                                    <Label for="subject">Subject</Label>
                                    <Input type="text" name="subject" id="subject" placeholder="Enter your Subject " onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Message</Label>
                                    <Input type="textarea" name="message" id="message" placeholder="Enter your Message" onChange={this.onChange} />
                                </FormGroup>
                                <Button>Send Message</Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default ContactUs;