import React, { Component } from 'react';
import Carousal from './carousel';
import FixedNavbar from './FixedNavbar';
import Search from './Search';
import Features from './Features';
import ReachOutToUs from './Reachout';
import { connect } from 'react-redux';
import { getCourses } from '../../actions/coursesActions';
import { getAllCentres } from '../../actions/centreActions';

class Home extends Component {
    componentDidMount() {
        this.props.getCourses();
        this.props.getAllCentres();
    }
    render() {
        return (
            <div>
                <Carousal />
                <FixedNavbar sticky="top" />
                <Search />
                <Features />
                <ReachOutToUs />
            </div>
        );
    }
}


export default connect(null, { getCourses, getAllCentres })(Home);