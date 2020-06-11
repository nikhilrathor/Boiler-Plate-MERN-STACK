import React, { Component } from 'react';
import ExamModal from './ExamsModal';
import axios from 'axios';
import { Table, Button } from 'reactstrap';

class Exams extends Component {
    state = {
        exams: []
    }
    componentDidMount() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/exams/getall', config)
            .then(res => {
                this.setState({ exams: res.data })
            })
    }
    componentDidUpdate() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/exams/getall', config)
            .then(res => {
                this.setState({ exams: res.data })
            })
    }

    onDeleteClick = (id) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }
        axios.delete(`/api/exams/${id}`, config)
    }

    render() {
        const { exams } = this.state;
        return (
            <div>
                <ExamModal />
                <h1 className="text-center">EXAM SCHEDULE</h1>
                <Table hover responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Course Name</th>
                            <th>Topic Name</th>
                            <th>Centre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams && exams.map(({ course, date, time, topicName, _id }) => (
                            <tr key={date}>
                                <td><Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => this.onDeleteClick(_id)}
                                >&times;</Button></td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{course.courseName}</td>
                                <td>{topicName}</td>
                                <td>{course.centre}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Exams;