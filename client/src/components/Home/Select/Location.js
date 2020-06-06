import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { centreInfo } from '../../../actions/centreActions';

class Location extends Component {
  state = {
    selectedCentre: 'Select a Centre'
  }
  setCentre = (e) => {
    this.setState({
      selectedCentre: e.target.value
    })
  }
  render() {
    const { allCentres } = this.props.centres;
    return (
      <div>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect"
            onChange={this.setCentre}>
            <option>Select a Centre</option>
            {allCentres.map(({ _id, placeName }) => (
              <option key={_id}>{placeName}</option>
            ))}
          </Input>
        </FormGroup>
        <Link to={`/branch/${this.state.selectedCentre}`}><Button onClick={() => this.props.centreInfo(this.state.selectedCentre)} disabled={this.state.selectedCentre === "Select a Centre"}>LOCATE NOW</Button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  centres: state.centres
})

export default connect(mapStateToProps, { centreInfo })(Location);