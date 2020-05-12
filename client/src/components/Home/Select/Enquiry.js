import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { courseForEnquiry } from '../../../actions/coursesActions';

class Enquiry extends Component {
  state = {
    selectedCourse: 'Select a Course'
  }
  setCourse = (e) => {
    this.setState({
      selectedCourse: e.target.value
    })
  }
  render() {
    const { courses } = this.props.courses;
    return (
      <div>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect"
            onChange={this.setCourse}>
            <option>Select a Course</option>
            {courses.map(({ _id, courseName }) => (
              <option key={_id}>{courseName}</option>
            ))}
          </Input>
        </FormGroup>
        <Link to={`/enquiry/${this.state.selectedCourse}`}><Button onClick={() => this.props.courseForEnquiry(this.state.selectedCourse)} disabled={this.state.selectedCourse === "Select a Course"}>CONTACT NOW</Button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses
})

export default connect(mapStateToProps, { courseForEnquiry })(Enquiry);