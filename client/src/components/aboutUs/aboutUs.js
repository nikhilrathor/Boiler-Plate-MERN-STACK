import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

class AboutUs extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Jumbotron>
                            <h1>“Things may come to those who wait but only the things left by those who hustle- Abraham Lincoln”</h1>
                            <hr className="my-2" />
                            <br></br>
                            <p>Dear Aspirants,</p>

                            <p>It is important to dream but it is even more important to work for it as there is no magic wand in the world that can turn a dream into reality. It takes the courage to dream the impossible, the determination not to give up when you do not succeed and the hard work to cement the desired success.</p>

                            <p>understands that the previous year exam papers can give the glimpse of the pattern of exam. Besides this targeted preparation under expert guidance coupled with unmatched study material makes the task much easier.</p>

                            <p>At Everest Educom Coaching Centre, we are committed to providing you the best in the arena whether it is the classroom atmosphere, the quality of lectures, the study material, the test series or the guidance and information, Paramount has consistently been the 360 degree benchmark setter in the past decade and with our innovative approaches and consistent efforts, we will continue to define the future of quality education.</p>

                            <p>Students are today enlightened and focused. They know what they are up to. They need just a ray of guidance. I feel I have accomplished the reason of my very own existence on this earth. Proud to be that faint ray of guidance, proud to be a reason of smile on certain lips, proud to be your teacher, friend and guide.</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default AboutUs;