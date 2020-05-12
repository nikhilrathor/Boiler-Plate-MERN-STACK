import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setCourse] = useState('sdak');
    
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Everest Educom</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
          <Nav className="ml-auto" navbar>
          <NavItem >
              <NavLink tag={Link} to="/login" >
              <Button outline color="secondary">LOGIN</Button>{' '}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;