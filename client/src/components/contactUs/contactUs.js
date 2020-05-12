import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Row, Jumbotron } from 'reactstrap';

const Example = (props) => {
    return (
        <Container className='mt-5'>
            <h1 className="text-center">Contact Us</h1>
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
                                <Label for="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Enter your Subject " />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Enter your Message"/>
                            </FormGroup>
                            <Button>Send Message</Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>

    );
}

export default Example;