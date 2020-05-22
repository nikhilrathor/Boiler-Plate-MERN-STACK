import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class user extends Component {
    render() {
        if(!this.props.loggedInUser)
            return (<Redirect to='/' />)
        return (
            <div>
                USER
            </div>
        );
    }
}

const MapStateToProps = state =>({
    loggedInUser: state.auth.loggedInUser
})

export default connect(MapStateToProps)(user);