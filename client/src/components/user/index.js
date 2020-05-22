import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import classes from './classes';
import exams from './exams';
import NavBar from './Navbar';

class user extends Component {
    render() {
        if (!this.props.loggedInUser)
            return (<Redirect to='/' />)
        return (
            <div>
                <NavBar />
                USER
                <Switch>
                    <Route path="/user/classes" component={classes} />
                    <Route path="/user/exams" component={exams} />
                </Switch>
            </div>
        );
    }
}

const MapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser
})

export default connect(MapStateToProps)(user);