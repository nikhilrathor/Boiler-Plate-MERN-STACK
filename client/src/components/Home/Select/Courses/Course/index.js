import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Details from './details';
import Results from './Results';
import EnrollNow from './enrollNow';
import { connect } from 'react-redux';
import { courseInfo } from '../../../../../actions/coursesActions'

class CourseDetails extends Component {
  componentDidMount(){
    this.props.courseInfo(localStorage.getItem('courseInfo'));
}
  render() {
    return (
      <div >
        <Navbar />
        <Switch>
          <Route path="/course/details" component={Details} />
          <Route path="/course/our-results" component={Results} />
          <Route path="/course/enroll-now" component={EnrollNow} />
        </Switch>
      </div>
    );
  }
}

export default connect(null,{courseInfo})(CourseDetails);
