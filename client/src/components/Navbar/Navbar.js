import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class NavBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let buttons = (<Nav className="ml-auto" navbar>
      <NavItem >
        <NavLink tag={Link} to="/login" >
          <Button outline color="secondary">LOGIN</Button>{' '}
        </NavLink>
      </NavItem>
    </Nav>)
    if (this.props.loggedInUser) {
      buttons = (<Nav className="ml-auto" navbar>
        <NavItem >
          <NavLink tag={Link} to="/user" >
            <Button outline color="secondary">User Area</Button>{' '}
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink onClick={this.props.logout}>
            <Button outline color="secondary">LOGOUT</Button>{' '}
          </NavLink>
        </NavItem>
      </Nav>)
    }
    if (this.props.loggedInAdmin) {
      buttons = (<Nav className="ml-auto" navbar>
        <NavItem >
          <NavLink tag={Link} to="/admin" >
            <Button outline color="secondary">Admin Area</Button>{' '}
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink onClick={this.props.logout}>
            <Button outline color="secondary">LOGOUT</Button>{' '}
          </NavLink>
        </NavItem>
      </Nav>)
    }
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Everest Educom</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about-us">ABOUT US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/all-branches">BRANCHES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact-us">CONTACT US</NavLink>
              </NavItem>
            </Nav>
            {buttons}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  loggedInUser: state.auth.loggedInUser,
  loggedInAdmin: state.auth.loggedInAdmin
})

export default connect(MapStateToProps, { logout })(NavBar);