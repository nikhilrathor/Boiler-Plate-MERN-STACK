import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron } from 'reactstrap';

const Example = (props) => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Jumbotron>
                        <h1 className="text-center">Reach out to us</h1>
                        <Form className='mt-5'>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="test" name="name" id="name" placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter yout email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phoneno">Phone Number</Label>
                                <Input type="number" name="phoneno" id="phoneno" placeholder="Enter your phone number" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="course">Course</Label>
                                <Input type="select" name="select" id="course">
                                    <option>SSC</option>
                                    <option>BANK</option>
                                    <option>LIC</option>
                                    <option>RAILWAYS</option>
                                    <option>CPO</option>
                                    <option>TET</option>
                                    <option>CTET</option>
                                    <option>NDA</option>

                                </Input>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>

    );
}

export default Example;