import React from 'react';
import {
    Card, CardText, CardDeck, CardBody
} from 'reactstrap';
import Enquiry from './Select/Enquiry';
import Courses from './Select/Courses/Courses';
import Location from './Select/Location';


const Example = (props) => {
    return (
        <CardDeck className='mt-5'>
            <Card>
                {/* <CardImg top width="100%" src="https://s3-ap-southeast-1.amazonaws.com/campusparamount/img/elements/pm-bv-ele-01.png" alt="Card image cap" />
                 */}<CardBody>
                    <CardText className="text-center"><b>Contact our centre and get expert counselling right away.</b></CardText>
                    <Enquiry />
                </CardBody>
            </Card>
            <Card>
                {/* <CardImg top width="100%" src="https://s3-ap-southeast-1.amazonaws.com/campusparamount/img/elements/pm-bv-ele-02.png" alt="Card image cap" />
                 */}<CardBody>
                    <CardText className="text-center"><b>Start your preparation today. Check out our courses.</b></CardText>
                    <Courses />
                </CardBody>
            </Card>
            <Card>
                {/* <CardImg top width="100%" src="https://s3-ap-southeast-1.amazonaws.com/campusparamount/img/elements/pm-bv-ele-03.png" alt="Card image cap" />
                 */}<CardBody>
                    <CardText className="text-center"><b>Know more about our centres. Walk in to our centre to attend a demo class</b></CardText>
                    <Location />
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Example;