import React, {Component} from 'react'
import {Container, Row, Col} from 'react-grid-system'

export default class UserInfo extends Component {
  render() {
    return (
      <div className='voter-block'>
        <Container>
          <Row>
            <Col>Address: </Col>
            <Col>Election Day: </Col>
            <Col>Party: </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
