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
import CKEditor from 'ckeditor4-react';
import axios from 'axios';

class CourseModal extends Component {
    state = {
        modal: false,
        courseName: '',
        fees: 0,
        description: '',
        msg: null
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onEditorChange = (evt) => {
        this.setState({
            description: evt.editor.getData()
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { courseName, fees, description } = this.state;
        let valid = true;

        if (!courseName && valid) {
            this.setState({ msg: "Course Name field cannot be empty!" });
            valid = false;
        }
        if (!fees && valid) {
            this.setState({ msg: "Fees field cannot be empty!" });
            valid = false;
        }
        if (!description && valid) {
            this.setState({ msg: "Course Description field cannot be empty!" });
            valid = false;
        }
        if (valid) {
            const newCourse = {
                courseName: courseName,
                fees: fees,
                description: description
            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'x-auth-token': localStorage.getItem('token')
                }
            }

            axios.post('/api/courses', newCourse, config)
                .then(
                    this.toggle(),
                    this.setState({ msg: null, description: '', courseName: '', fees: '' })
                )
                .catch(err =>
                    this.setState({msg: "Something went wrong, try again!"})
                )
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
                    Add Course
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-lg"
                >
                    <ModalHeader toggle={this.toggle}>Add To Courses</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                        <Form onSubmit={this.onSubmit} >
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="item">Course Name</Label>
                                        <Input
                                            type="text"
                                            name="courseName"
                                            id="courseName"
                                            placeholder="Course Name"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="item">Course Fees</Label>
                                        <Input
                                            type="number"
                                            name="fees"
                                            id="fees"
                                            placeholder="Course Fees"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                            </Row>


                            <FormGroup>
                                <Label for="item">Course Description</Label>
                                <CKEditor
                                    name="description"
                                    className="mb-3"
                                    onChange={this.onEditorChange}
                                />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >
                                Add Course
                                </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CourseModal;