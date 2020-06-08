import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ChangePassword from './changePassword';
class UserNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar expand="sm" className="navbar navbar-light bg-info">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto " navbar>
                            <NavItem>
                                <NavLink tag={Link} to={`/admin/courses`}>Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={`/admin/centres`}>Centres</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={`/admin/classes`}>Classes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={`/admin/exams`}>Exams</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <ChangePassword />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default UserNavbar;