import React, { Component } from 'react';
import axios from 'axios';
import { returnErrors } from '../../actions/errorActions';
import { Table } from 'reactstrap';

class Classes extends Component {
    state = {
        classes: null
    }
    componentDidMount() {

        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/classes/user', config)
            .then(res => this.setState({
                classes: res.data
            }))
            .catch(err => {
                returnErrors(err.data, err.status)
            })
    }
    render() {
        //console.log(this.state.classes)
        const { classes } = this.state;
        return (
            <div>
                <h1 className="text-center mt-5">CLASS SCHEDULE</h1>
                <Table hover responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Course Name</th>
                            <th>Topic Name</th>
                            <th>Teacher Name</th>
                            <th>Centre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes && classes.map(({ course, day, teacherName, time, topicName }) => (
                            <tr key={day}>
                                <td>{day}</td>
                                <td>{time}</td>
                                <td>{course.courseName}</td>
                                <td>{topicName}</td>
                                <td>{teacherName}</td>
                                <td>{course.centre}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default Classes;