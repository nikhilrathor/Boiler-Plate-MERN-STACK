import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { courseDescription } from '../../../../../actions/coursesActions';
import parse from 'html-react-parser';

class Details extends Component {
    componentDidMount() {
        this.props.courseDescription(localStorage.getItem('courseInfo'));
    }
    render() {
        const details = parse(this.props.description);
        return (
            <Jumbotron className='mt-5'>
                <div >
                    <div >
                        <h3>{this.props.selectedCourse}</h3>
                        <hr></hr>
                    </div>
                    <div >
                        {details}
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({
    selectedCourse: state.courses.courseForDetails,
    description: state.courses.courseDescription
})

export default connect(mapStateToProps, { courseDescription })(Details);