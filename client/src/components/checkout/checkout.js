import React, { Component } from 'react';
import { Jumbotron, Toast, ToastBody, ToastHeader, Row, Form, FormGroup, Label, Input, Alert, Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getCentresByCourse } from '../../actions/centreActions';
import { permanentUser } from '../../actions/authActions';
import { courseFees } from '../../actions/coursesActions';
import { Redirect } from 'react-router-dom';
import Paypal from './paypal';

class Checkout extends Component {

    componentDidMount() {
        this.props.getCentresByCourse(localStorage.getItem('courseInfo'));
        this.props.courseFees(localStorage.getItem('courseInfo'));
    }
    state = {
        selectedCourse: localStorage.getItem('courseInfo'),
        selectedCentre: 'Select a Centre',
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

    render() {
        const onSubmit = (data) => {

            this.setState({
                msg: `Transaction Success, Redirecting to Login Page`
            })

            const { selectedCentre, selectedCourse } = this.state;
            const { email } = this.props;
            const User = {
                email,
                selectedCentre,
                selectedCourse,
                data
            }

            this.props.permanentUser(User);
        }

        const transactionError = () => {
            this.setState({
                msg: "Transaction Error"
            })
        }

        const transactionCanceled = () => {
            this.setState({
                msg: "Transaction Cancelled"
            })
        }

        const { isAuthenticated, paymentCompleted } = this.props;
        if (!isAuthenticated)
            return (<Redirect to="/" />)
        if (paymentCompleted) {
            return (<Redirect to="/login" />)
        }
        const { centres, Fees } = this.props;
        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Jumbotron>
                                {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
                                {paymentCompleted && this.state.msg ? (<Alert color='success'>{this.state.msg}</Alert>) : null}
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
                                <Form>
                                    <FormGroup>
                                        <Label for="centre">Centre</Label>
                                        <Input type="select" name="select" id="exampleSelect"
                                            onChange={this.setCentre}>
                                            {centres.map(({ _id, placeName }) => (
                                                <option key={_id}>{placeName}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    {/* <Button>Pay Now</Button> */}
                                    <Paypal
                                        toPay={Fees}
                                        onSuccess={onSubmit}
                                        transactionError={transactionError}
                                        transactionCanceled={transactionCanceled}
                                    />
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