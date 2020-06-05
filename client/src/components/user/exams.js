import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Exams extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-5">EXAM SCHEDULE</h1>
                <Table hover responsive className="mt-5">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Topic Name</th>
                            <th>Centre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Exams;