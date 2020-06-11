import React, { Component } from 'react';
import CourseModal from './CoursesModal';
import axios from 'axios';
import { Table } from 'reactstrap';
import {Button} from 'reactstrap';

class Courses extends Component {
    state = {
        courses: []
    }
    componentDidMount() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/courses/getall', config)
            .then(res => {
                this.setState({ courses: res.data })
            })
    }
    componentDidUpdate() {
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }

        axios.get('/api/courses/getall', config)
            .then(res => {
                this.setState({ courses: res.data })
            })
    }
    onDeleteClick = (id) =>{
        const config = {
            headers: {
                "Content-type": "application/json",
                'x-auth-token': localStorage.getItem('token')
            }
        }
        axios.delete(`/api/courses/${id}`, config)
    }
    render() {
        const { courses } = this.state;
        return (
            <div>
                <CourseModal />
                <h1 className="text-center">COURSES</h1>
                <Table hover responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Course Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses && courses.map(({ courseName, fees, _id }) => (
                            <tr key={_id}>
                                <td><Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => this.onDeleteClick(_id)}
                                >&times;</Button></td>
                                <td>{courseName}</td>
                                <td>{fees}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Courses;