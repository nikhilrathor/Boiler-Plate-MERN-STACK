import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Classes extends Component {
    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Course Name</th>
                        <th>Centre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default Classes;