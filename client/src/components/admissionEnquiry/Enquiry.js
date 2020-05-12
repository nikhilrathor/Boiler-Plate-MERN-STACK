import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { courseForEnquiry } from '../../actions/coursesActions';

class AdmissionEnquiry extends Component {
    componentDidMount(){
        this.props.courseForEnquiry(localStorage.getItem('courseForEnquiry'));
    }
    render() {
        return (
            <Container className='mt-5'>
                <h1 className="text-center">Quick Enquiry</h1>
                <h3 className="text-center">COURSE: {this.props.selectedCourse}</h3>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron>
                            <Form >
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder="Enter your name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneno">Phone Number</Label>
                                    <Input type="number" name="phoneno" id="phoneno" placeholder="Enter your phone no" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input type="text" name="city" id="city" placeholder="Enter your city" />
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

export default connect(mapStateToProps,{ courseForEnquiry })(AdmissionEnquiry);