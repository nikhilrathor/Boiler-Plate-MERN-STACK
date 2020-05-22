import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class admin extends Component {
    render() {
        if(!this.props.loggedInAdmin)
            return (<Redirect to='/' />)
        return (
            <div>
                ADMIN
            </div>
        );
    }
}

const MapStateToProps = state =>({
    loggedInAdmin: state.auth.loggedInAdmin
})

export default connect(MapStateToProps)(admin);