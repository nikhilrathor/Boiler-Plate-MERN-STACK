import React from 'react';
import { Jumbotron, Container, Row, Col, Media } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron className='mt-5' >
                <h1 className="text-center">What we have for you!</h1>
                <p className="text-center">We intend to touch the life of every single student who comes to to us for coaching, guidance and mentorship through:</p>
                <hr className="my-2" />

                <Container>
                    <Row className='mt-5'>
                        <Col>
                            <Media>
                                <Media object src="http://www.paramountcoaching.in/wp-content/uploads/2016/07/class-group.png" alt="Generic placeholder image" />
                                <Media body>
                                    <Media heading>
                                        Classroom Sessions
                                    </Media>
                                    Classroom sessions that focus on getting you geared up and easy with all your concepts to face your examinations.
                                </Media>
                            </Media>
                        </Col>
                        <Col>
                            <Media>
                                <Media object src="http://www.paramountcoaching.in/wp-content/uploads/2016/07/living-room-books-group.png" alt="Generic placeholder image" />
                                <Media body>
                                    <Media heading>
                                        Comprehensive study material
                                    </Media>
                                    Comprehensive and integrated study material that is developed by subject experts with extensive experience in their domain
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            <Media>
                                <Media object src="http://www.paramountcoaching.in/wp-content/uploads/2016/07/male-ecological-class.png" alt="Generic placeholder image" />
                                <Media body>
                                    <Media heading>
                                        Doubt Cell
                                    </Media>
                                    Our dedicated doubt clearance cell helps student to clarify their queries from our renowned faculty team.
                                </Media>
                            </Media>
                        </Col>
                        <Col>
                            <Media>
                                <Media object src="http://www.paramountcoaching.in/wp-content/uploads/2016/07/online-test.png" alt="Generic placeholder image" />
                                <Media body>
                                    <Media heading>
                                        Online Assessments
                                    </Media>
                                    Best In Class Online Assessment Portal to ensure your preparation is effective and efficient
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;