import React from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    NavLink,
    Button
} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Navbar color="dark" dark expand="md">
                <Container className='mt-5'>
                    <Row>
                        <Col className="text-muted text-center">
                            <b>EVEREST EDUCOM</b>
                            <br></br>
                            <br></br>
                            Everest Educom, we are committed to providing you the best in the arena whether it is the classroom atmosphere, the quality of lectures, the study material, the test series or the guidance and information…
                            <br></br>
                            <NavLink href="/about">
                                <Button color="info">Learn More</Button>{' '}
                            </NavLink>

                        </Col>
                        <Col className="text-muted text-center">
                            <b>  QUICK LINKS</b>
                            <br></br>
                            <br></br>
                            <ul>
                                <li>
                                    <NavLink href="/about" style={{ color: 'grey' }}>About Everest Educom</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/contact-us" style={{ color: 'grey' }}>Contact US</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/branches" style={{ color: 'grey' }}>Locate Centre</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col className="text-muted text-center">
                            <b>Contact Us</b>
                            <br></br>
                            <br></br>
                                Address:704 , 1st ,Floor Near Batra Cinema, Dr. Mukherjee Nagar, Delhi - 110009.</Col>
                        <Col className="text-muted text-center">
                            <b>Follow Us</b>
                            <br></br>
                            <br></br>
                            <SocialIcon url="http://twitter.com" />
                            <SocialIcon url="http://plus.google.com" />
                            <SocialIcon url="http://facebook.com" />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Navbar className="navbar navbar-dark bg-secondary">
            <Container >
                <Row className="text-center">
                © 2020 Everest Educom Pvt. Ltd, All rights reserved. Privacy policy and Disclaimer.
          Presented by Nikhil Rathor
                </Row>
            </Container>
            </Navbar>
        </div>
    );
}

export default Footer;