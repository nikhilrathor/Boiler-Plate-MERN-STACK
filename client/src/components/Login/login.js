import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let valid = true;
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email' })
            valid = false
        }
        if (!password && valid) {
            this.setState({ msg: 'Password field cannot be empty' })
            valid = false
        }
        if (valid) {
            this.setState({ msg: null });
            const User = {
                email,
                password
            }
            //this.props.login(verifyUser);
        }

    }

    render() {
        return (
            <div className="mt-5">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                                <h1 className="display-3">Login</h1>
                                <hr className="my-2" />
                                <Form className="mt-5" onSubmit={this.onSubmit}>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="Email">Email</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="Email"
                                                    placeholder="Enter Registered Email Id"
                                                    className="mb-3"
                                                    onChange={this.onChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="Password">Password</Label>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    id="Password"
                                                    placeholder="Enter Password"
                                                    className="mb-3"
                                                    onChange={this.onChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button>LOGIN</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
};

export default Login;