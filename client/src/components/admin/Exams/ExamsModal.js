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
//import { addItem } from '../actions/itemActions';

class ExamsModal extends Component {
    state = {
        date: null,
        time: null,
        topicName: '',
        courseName: 'Select Course',
        centre: 'Select Centre',
        msg: null
    }

    componentDidUpdate() {
        const { courseName } = this.state;
        if (courseName !== 'Select Course') {
            console.log(courseName);
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setCourse = (e) => {
        this.setState({
            courseName: e.target.value
        })
    }

    setCentre = (e) => {
        this.setState({
            centre: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { topicName, date, time, courseName, centre } = this.state;
        let valid = true;

        if (!topicName && valid) {
            this.setState({ msg: "Topic Name field cannot be empty!" });
            valid = false;
        }
        if (!date && valid) {
            this.setState({ msg: 'Enter valid Date' })
            valid = false;
        }
        if (!time && valid) {
            this.setState({ msg: 'Enter valid Time' })
            valid = false;
        }
        if (courseName === 'Select Course' && valid) {
            this.setState({ msg: 'Select Course' })
            valid = false;
        }
        if (centre === 'Select Centre' && valid) {
            this.setState({ msg: 'Select Centre' })
            valid = false;
        }
        if (valid) {
            const newClass = {
                date: date,
                time: time,
                topicName: topicName,
                courseName: courseName,
                centre: centre
            }
            console.log(date, time, topicName, courseName, centre)
            //this.props.addItem(newItem);
            this.toggle();
            this.setState({
                date: null,
                time: null,
                topicName: '',
                courseName: 'Select Course',
                centre: 'Select Centre',
                msg: null
            })
        }
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Exam
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-lg"
                >
                    <ModalHeader toggle={this.toggle}>Add To Exams</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label for="topicName">Topic Name</Label>
                                <Input
                                    type="text"
                                    name="topicName"
                                    id="topicName"
                                    placeholder="Topic Name"
                                    onChange={this.onChange}
                                    className="mb-3"
                                >
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Date">Date</Label>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="Date"
                                            placeholder="date placeholder"
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="time">Time</Label>
                                        <Input
                                            type="time"
                                            name="time"
                                            id="time"
                                            placeholder="time placeholder"
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="day">Course</Label>
                                        <Input type="select" name="course" id="course" onChange={this.setCourse}>
                                            <option>Select Course</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="day">Centre</Label>
                                        <Input type="select" name="centre" id="centre" onChange={this.setCentre} disabled={this.state.courseName === 'Select Course'}>
                                            <option>Select Centre</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >
                                Add Class
                                </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
/* const mapStateTopProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
}) */

export default ExamsModal;