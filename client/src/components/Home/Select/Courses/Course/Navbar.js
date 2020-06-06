import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CourseNavbar extends Component {
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
                                <NavLink tag={Link} to={`/course/details/${this.props.selectedCourse}`}>Everest Educom @{this.props.selectedCourse}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={`/course/our-results/${this.props.selectedCourse}`}>Our Results</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/course/latest-new">Latest News</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto " navbar>
                            <NavItem >
                                <NavLink href="/enroll" >
                                    <Link to={`/course/enroll-now/${this.props.selectedCourse}`}><Button outline color="secondary">Enroll Now</Button>{' '}</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedCourse: state.courses.courseForDetails
})

export default connect(mapStateToProps)(CourseNavbar);