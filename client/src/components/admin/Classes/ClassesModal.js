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

class ClassesModal extends Component {
    state = {
        day: 'Select Day',
        topicName: '',
        time: null,
        teacherName: '',
        courseName: 'Select Course',
        centre: 'Select Centre',
        msg: null
    }

    componentDidUpdate(){
        const {courseName} = this.state;
        if(courseName !== 'Select Course')
        {
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

    setDay = (e) => {
        this.setState({
            day: e.target.value
        })
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
        const { day, topicName, time, teacherName, courseName, centre } = this.state;
        let valid = true;

        if (day === 'Select Day' && valid) {
            this.setState({ msg: 'Select Day' })
            valid = false;
        }
        if (!time && valid) {
            this.setState({ msg: 'Enter valid Time' })
            valid = false;
        }
        if (!topicName && valid) {
            this.setState({ msg: "Topic Name field cannot be empty!" });
            valid = false;
        }
        if (!teacherName && valid) {
            this.setState({ msg: "Teacher Name field cannot be empty!" });
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
                day: day,
                time: time,
                topicName: topicName,
                teacherName: teacherName,
                courseName: courseName,
                centre: centre
            }
            console.log(day, time, topicName, teacherName, courseName, centre)
            //this.props.addItem(newItem);
            this.toggle();
            this.setState({
                day: 'Select Day',
                topicName: '',
                time: null,
                teacherName: '',
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
                    Add Class
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-lg"
                >
                    <ModalHeader toggle={this.toggle}>Add To Classes</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                        <Form onSubmit={this.onSubmit} >
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="day">Day</Label>
                                        <Input type="select" name="day" id="day" onChange={this.setDay}>
                                            <option>Select Day</option>
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
                            <Row form>
                                <Col md={6}>
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

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="teacherName">Teacher Name</Label>
                                        <Input
                                            type="text"
                                            name="teacherName"
                                            id="teacherName"
                                            placeholder="Teacher Name"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
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

export default ClassesModal;