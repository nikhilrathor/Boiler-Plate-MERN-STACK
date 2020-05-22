import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login/login';
import Navbar from './Navbar/Navbar';
import Home from './Home/home';
import Footer from './footer/footer';
import Enquiry from './admissionEnquiry/Enquiry';
import Branch from './centre/centre';
import AllBranches from './allBranches/allBranches';
import ContactUs from './contactUs/contactUs';
import Course from './Home/Select/Courses/Course';
import AboutUs from './aboutUs/aboutUs';
import Checkout from '../components/checkout/checkout';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import user from '../components/user';
import admin from '../components/admin';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <div >
        <Container fluid>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/enquiry" component={Enquiry} />
            <Route path="/branch" component={Branch} />
            <Route path="/all-branches" component={AllBranches} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/course" component={Course} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={user} />
            <Route path='/admin' component={admin} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Container>
      </div>

    );
  }
}

export default connect(null, { loadUser })(App);
