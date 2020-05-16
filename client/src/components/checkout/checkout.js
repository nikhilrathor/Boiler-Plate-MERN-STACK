import React, { Component } from 'react';
import { Jumbotron, Toast, ToastBody, ToastHeader, Button, Row, Form, FormGroup, Label, Input, Alert, Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getCentresByCourse } from '../../actions/centreActions';
import { permanentUser } from '../../actions/authActions';
import { courseFees } from '../../actions/coursesActions';
import {Redirect} from 'react-router-dom';

class Checkout extends Component {

    componentDidMount() {
        this.props.getCentresByCourse(localStorage.getItem('courseInfo'));
        this.props.courseFees(localStorage.getItem('courseInfo'));
    }
    state = {
        selectedCourse: localStorage.getItem('courseInfo'),
        selectedCentre: 'Select a Centre',
        password: '',
        msg: null
    }
    setCentre = (e) => {
        this.setState({
            selectedCentre: e.target.value
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { password, selectedCentre, selectedCourse } = this.state;
        const {email} = this.props;
        let valid = true;
        if (selectedCentre === 'Select a Centre' && valid) {
            this.setState({ msg: 'Please Select a centre' })
            valid = false
        }
        if (!password && valid) {
            this.setState({ msg: 'Password field cannot be empty' })
            valid = false
        }
        if (valid) {
            this.setState({ msg: null })
            const User = {
                email,
                password,
                selectedCentre,
                selectedCourse
            }

            this.props.permanentUser(User);
        }
    }

    render() {
        /* const {isAuthenticated, paymentCompleted} = this.props;
        if (!isAuthenticated || paymentCompleted)
            return (<Redirect to="/" />) */
        const { centres, Fees } = this.props;
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Jumbotron>
                                {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}

                                <h1 className="display-3" >Checkout</h1>
                                <hr className="my-2" />
                                <div className="p-3 bg-info my-2 rounded mt-5">
                                    <Toast>
                                        <ToastHeader>
                                            <h2>
                                                COURSE: {this.state.selectedCourse}
                                            </h2>
                                        </ToastHeader>
                                        <ToastBody>
                                            FEES: ${Fees}
                                        </ToastBody>
                                    </Toast>
                                </div>
                                <Form onSubmit={this.onSubmit}>
                                    <FormGroup>
                                        <Label for="centre">Centre</Label>
                                        <Input type="select" name="select" id="exampleSelect"
                                            onChange={this.setCentre}>
                                            <option>Select a Centre</option>
                                            {centres.map(({ _id, placeName }) => (
                                                <option key={_id}>{placeName}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Enter your permanent password" onChange={this.onChange} />
                                    </FormGroup>
                                    <Button>Pay Now</Button>
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
    centres: state.centres.centresByCourse,
    Fees: state.courses.courseFees,
    email: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    paymentCompleted: state.auth.paymentCompleted
})

export default connect(mapStateToProps, { getCentresByCourse, courseFees, permanentUser })(Checkout);