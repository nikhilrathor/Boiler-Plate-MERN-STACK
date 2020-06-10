import React, { Component } from 'react';
import CentreModal from './CentresModal';
import axios from 'axios';
import { Table, ListGroup, ListGroupItem } from 'reactstrap';
class Centres extends Component {
    state = {
        centres: []
    }
    componentDidMount() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/centre/getall', config)
            .then(res => {
                this.setState({ centres: res.data })
            })
    }
    componentDidUpdate() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/centre/getall', config)
            .then(res => {
                this.setState({ centres: res.data })
            })
    }
    render() {
        const { centres } = this.state;
        return (
            <div>
                <CentreModal />
                <h1 className="text-center">CENTRES</h1>
                <Table hover responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Courses Offered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {centres && centres.map(({ placeName, phoneNumber, email, address, courseOffered, _id }) => (
                            <tr key={_id}>
                                <td></td>
                                <td>{placeName}</td>
                                <td>{phoneNumber}</td>
                                <td>{email}</td>
                                <td>{address}</td>
                                <td>
                                    <ListGroup>
                                        {courseOffered && courseOffered.map((course) => 
                                            <ListGroupItem >{course}</ListGroupItem>
                                        )}
                                    </ListGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Centres;