import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseInfo } from '../../actions/coursesActions';

class FixedNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    Handler(courseName) {
        this.props.courseInfo(courseName.courseName)
    }

    render() {
        const { courses } = this.props.courses;
        console.log(courses);
        return (
            <div>
                <Navbar color="dark" dark expand="md" className="navbar navbar-light bg-info">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto container-fluid" navbar>
                            {courses.map(({ _id, courseName }) => (
                                <NavItem key={_id}>
                                    <NavLink tag={Link} to={`/course/details/${courseName}`} onClick={() => this.Handler({ courseName })}>{courseName}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    courses: state.courses
})

export default connect(mapStateToProps, { courseInfo })(FixedNavbar);