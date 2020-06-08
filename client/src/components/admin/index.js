import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Centres from './Centres/Centres';
import Classes from './Classes/Classes';
import Exams from './Exams/Exams';
import Courses from './Courses/Courses';
import NavBar from './Navbar';

class admin extends Component {
    render() {
        if (!this.props.loggedInAdmin)
            return (<Redirect to='/' />)
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path="/admin/courses" component={Courses} />
                    <Route path="/admin/centres" component={Centres} />
                    <Route path="/admin/classes" component={Classes} />
                    <Route path="/admin/exams" component={Exams} />
                </Switch>
            </div>
        );
    }
}

const MapStateToProps = state => ({
    loggedInAdmin: state.auth.loggedInAdmin
})

export default connect(MapStateToProps)(admin);