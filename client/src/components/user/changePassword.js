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
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import { changePassword, initChangePassword } from '../../actions/authActions';

class ChangePassword extends Component {
    state = {
        modal: false,
        oldPassword: '',
        newPassword: '',
        msg: null
    };

    componentDidUpdate(prevProps) {
        const { error, passwordChanged } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'CHANGE_PASSWORD_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else
                this.setState({ msg: null });
        }
        if(this.state.modal){
            if(passwordChanged){
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.props.initChangePassword();
        if (this.state.msg)
            this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { oldPassword, newPassword } = this.state;

        let valid = true;
        console.log(oldPassword, newPassword);
        if (!oldPassword && valid) {
            this.setState({ msg: 'Current Password field cannot be empty' })
            valid = false
        }
        if (!newPassword && valid) {
            this.setState({ msg: 'New Password field cannot be empty' })
            valid = false
        }
        if (valid) {
            this.setState({ msg: null });
            const changePassword = {
                oldPassword,
                newPassword
            }
            this.props.changePassword(changePassword);
        }

    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle} color="primary">Change Password</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Change Password</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label for="oldPassword">Current Password</Label>
                                <Input
                                    type="password"
                                    name="oldPassword"
                                    id="oldpassword"
                                    placeholder="Current Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Label for="newPassword">Password</Label>
                                <Input
                                    type="password"
                                    name="newPassword"
                                    id="newpassword"
                                    placeholder="New Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >
                                    Change Password
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    passwordChanged: state.auth.passwordChanged
})

export default connect(mapStateToProps, { clearErrors, changePassword, initChangePassword })(ChangePassword);