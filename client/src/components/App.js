import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './RegisterLogin';
import Navbar from './Navbar/Navbar';
import Home from './Home/home';
import Footer from './footer/footer';
import Enquiry from './admissionEnquiry/Enquiry';
import Branch from './centre/centre';
import AllBranches from './allBranches/allBranches';
import ContactUs from './contactUs/contactUs';
import Course from './Home/Select/Courses/Course';
import AboutUs from './aboutUs/aboutUs';
import {Container} from 'reactstrap';

function App() {
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
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Container>
    </div>

  );
}

export default App;
