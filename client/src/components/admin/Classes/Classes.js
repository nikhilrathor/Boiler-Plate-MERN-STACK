import React, { Component } from 'react';
import ClassModal from './ClassesModal';
import axios from 'axios';
import { Table } from 'reactstrap';

class Classes extends Component {
    state = {
        classes: []
    }
    componentDidMount() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/classes/getall', config)
            .then(res => {
                this.setState({ classes: res.data })
            })
    }
    componentDidUpdate() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/classes/getall', config)
            .then(res => {
                this.setState({ classes: res.data })
            })
    }
    render() {
        const { classes } = this.state;
        return (
            <div>
                <ClassModal />
                <h1 className="text-center">CLASS SCHEDULE</h1>
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