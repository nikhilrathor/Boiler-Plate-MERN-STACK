import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../../../../../actions/authActions';
import EnrollNowVerify from './verify';
import { Redirect } from 'react-router-dom';

class EnrollNow extends Component {

    componentDidMount() {
        this.setState({msg: null});
    }

    state = {
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        course: localStorage.getItem('courseInfo'),
        msg: null
    };

    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if (auth !== prevProps.auth) {
            if (auth.status === 'temp')
                this.setState({ msg: auth.msg });
        }
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

        const { name, email, password, address, course, phoneNumber } = this.state;
        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const validnumeric = /^\d+$/;
        let valid = true;
        if (!name && valid) {
            this.setState({ msg: 'Name field cannot be empty' })
            valid = false
        }
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email' })
            valid = false
        }
        if ((!validnumeric.test(phoneNumber) || phoneNumber.length != 10) && valid) {
            this.setState({ msg: 'Invalid phoneNumber' })
            valid = false
        }
        if (!address && valid) {
            this.setState({ msg: 'Address field cannot be empty' })
            valid = false
        }
        if (valid) {
            this.setState({ msg: null })
            const newUser = {
                name,
                email,
                phoneNumber,
                address
            }

            this.props.register(newUser);
        }
    }

    render() {
        if (this.props.auth.isAuthenticated)
            return (<Redirect to={`/checkout/${this.state.course}`} />)
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
                                    <EnrollNowVerify />
                                </p>
                            </Jumbotron>
                        </Col>
                        <Col sm="8" md={{ size: 6, offset: 1 }}>
                            <Jumbotron>
                                <h1 >New Users</h1>
                                <hr className="my-2" />
                                <p>Enter Details for temperory account.</p>
                                {this.state.msg ? (<Alert color={this.props.auth.status === 'temp' ? 'success' : 'danger'}>{this.state.msg}</Alert>) : null}
                                <Form onSubmit={this.onSubmit}>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.onChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input type="textarea" name="address" id="address" placeholder="Address" onChange={this.onChange} />
                                    </FormGroup>
                                    <Button color="info">Submit</Button>
                                </Form>
                                <hr className="my-2" />
                                <p>Users proceed by entering temperory E-mail and password sent to your mail.</p>
                                <EnrollNowVerify />
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    error: state.error,
    auth: state.auth
})

export default connect(mapStateToProps, { register })(EnrollNow);