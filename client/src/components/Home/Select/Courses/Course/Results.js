import React, { Component } from 'react';
import {
  Card, CardImg, CardText,
  Container, Row, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { getCourseResults } from '../../../../../actions/resultActions';

class Results extends Component {
  componentDidMount() {
    this.props.getCourseResults(localStorage.getItem('courseInfo'));
  }
  render() {
    const { results } = this.props.results;
    return (
      <Container className='mt-5 text-center'>
        <Row xs="4" >
          {
            results.map(({ achieverName, rank }) => (
              <Col ><Card>
                <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
                <CardText>
                  <p>{achieverName}</p>
                  <p>Rank: {rank}</p>
                </CardText>
              </Card></Col>
            ))
          }

          {/* <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col>
          <Col><Card>
            <CardImg top width="100%" src="/logo192.png" alt="Card image cap" />
            <CardText>
              <p>Name</p>
              <p>Rank</p>
            </CardText>
          </Card></Col> */}
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  results: state.results
})

export default connect(mapStateToProps, { getCourseResults })(Results);