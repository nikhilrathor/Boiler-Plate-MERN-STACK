import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';

class EnrollNow extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        course: localStorage.getItem('courseInfo'),
        msg: null
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else
                this.setState({ msg: null });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, address, course } = this.state;

        const newUser = {
            name,
            email,
            password,
            address,
            course
        }

        this.props.register(newUser);

    }

    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col sm="4" md={{ size: 4, offset: 0 }}>
                            <Jumbotron>
                                <h1 >Already Registered!</h1>
                                <hr className="my-2" />
                                <p>Users proceed by entering registered E-mail and password.</p>
                                <p className="lead">
                                    <Button color="primary">Proceed</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                        <Col sm="8" md={{ size: 6, offset: 1 }}>
                            <Jumbotron>
                                <h1 >New Users</h1>
                                <hr className="my-2" />
                                <p>Enter Details for temperory account.</p>
                                {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="textarea" name="address" id="address" placeholder="Address" onChange={this.onChange} />
                                    </FormGroup>
                                    <p>
                                        <Button onSubmit={this.onSubmit} color="primary">Submit</Button>
                                        <Button className="ml-5" color="primary">Proceed</Button>
                                    </p>
                                </Form>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    error: state.error
})

export default connect(mapStateToProps)(EnrollNow);