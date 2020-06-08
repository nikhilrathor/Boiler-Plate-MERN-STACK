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

class CentreModal extends Component {
    state = {
        modal: false,
        placeName: '',
        phoneNumber: 0,
        email: '',
        address: '',
        embeddedURL: '',
        options: [],
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

    checkChange = (e) => {
        const options = [...this.state.options]
        let index
    
        if (e.target.checked) {
          options.push(e.target.value)
        } else {
          index = options.indexOf(e.target.value)
          options.splice(index, 1)
        }
    
        options.sort()    
    
        this.setState({ options: options })
      }

    onSubmit = (e) => {
        e.preventDefault();
        const { placeName, phoneNumber, email, address, embeddedURL, options } = this.state;
        const vaildmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const validnumeric = /^\d+$/;
        let valid = true;

        if (!placeName && valid) {
            this.setState({ msg: "Place Name field cannot be empty!" });
            valid = false;
        }
        if ((!validnumeric.test(phoneNumber) || phoneNumber.length !== 10) && valid) {
            this.setState({ msg: 'Invalid phoneNumber' })
            valid = false
        }
        if (!vaildmail.test(email) && valid) {
            this.setState({ msg: 'Invalid Email' })
            valid = false
        }
        if (!address && valid) {
            this.setState({ msg: 'Address field cannot be empty' })
            valid = false
        }
        if (!embeddedURL && valid) {
            this.setState({ msg: 'EmbeddedURL field cannot be empty' })
            valid = false
        }
        if (options.length === 0 && valid) {
            this.setState({ msg: 'No Course Selected' })
            valid = false
        }
        if (valid) {
            const newCentre = {
                placeName: placeName,
                phoneNumber: phoneNumber,
                email: email,
                address: address,
                embeddedURL: embeddedURL,
                coursesOffered: options
            }
            //console.log(placeName, phoneNumber, email, address, embeddedURL, options)
            //this.props.addItem(newItem);
            this.toggle();
            this.setState({ msg: null, placeName: '', phoneNumber: 0, email: '', address: '', embeddedURL: '', coursesOffered: [] })
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
                    Add Centre
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="modal-lg"
                >
                    <ModalHeader toggle={this.toggle}>Add To Centres</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : ''}
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label for="placeName">Place Name</Label>
                                <Input
                                    type="text"
                                    name="placeName"
                                    id="placeName"
                                    placeholder="Place Name"
                                    onChange={this.onChange}
                                    className="mb-3"
                                >
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input
                                            type="number"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder="Phone Number"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={this.onChange}
                                            className="mb-3" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="Address"
                                            onChange={this.onChange}
                                            className="mb-3"
                                        >
                                        </Input>
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="URL">Map EmbeddedURL</Label>
                                        <Input
                                            type="text"
                                            name="embeddedURL"
                                            id="embeddedURL"
                                            placeholder="Map EmbeddedURL"
                                            onChange={this.onChange} 
                                            className="mb-3"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                            <Label for="Courses">Courses Offered</Label>
                            </FormGroup>
                            
                            <FormGroup check inline>
        <Label check>
          <Input type="checkbox" value="Some input10" onChange={this.checkChange} className="mb-3"/> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" value="Some input" onChange={this.checkChange} className="mb-3"/> Some other input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" value={"Some input8"} onChange={this.checkChange} className="mb-3"/> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" value={"Some input7"} onChange={this.checkChange} className="mb-3"/> Some other input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" value={"Some input6"} onChange={this.checkChange} className="mb-3"/> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" value={"Some input5"} onChange={this.checkChange} className="mb-3"/> Some other input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" value={"Some input4"} onChange={this.checkChange} className="mb-3"/> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" value={"Some input3"} onChange={this.checkChange} className="mb-3"/> Some other input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" value={"Some input2"} onChange={this.checkChange} className="mb-3"/> Some input
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" value={"Some input1"} onChange={this.checkChange} className="mb-3"/> Some other input
        </Label>
      </FormGroup>
      

                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >
                                Add Centre
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

export default CentreModal;