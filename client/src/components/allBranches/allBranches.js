import React, { Component } from 'react';
import { Jumbotron, Button, Card, CardTitle, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { centreInfo, getAllCentres } from '../../actions/centreActions';

class AllBranches extends Component {
  componentDidMount() {
    this.props.getAllCentres();
  }
  state = {
    selectedBranch: ''
  }
  Handler(placeName) {
    this.props.centreInfo(placeName.placeName)
  }
  render() {
    const { allCentres } = this.props.centres;
    return (
      <div className='mt-5' >
        <Jumbotron>
          <h1 className="text-center">EVEREST EDUCOM BRANCHES</h1>
          <Container >
            <Row>
              {allCentres.map(({ _id, placeName }) => (
                <Col xs="auto mt-5" key={_id}>
                  <Card body inverse color="info">
                    <CardTitle><h2>{placeName}</h2></CardTitle>
                    <br></br>
                    <br></br>
                    <Link to={`/branch/${placeName}`}><Button onClick={() => this.Handler({ placeName })} color="secondary">Know More</Button></Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

        </Jumbotron>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  centres: state.centres
})

export default connect(mapStateToProps, { centreInfo, getAllCentres })(AllBranches);