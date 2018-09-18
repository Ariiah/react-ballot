import React, {Component} from 'react'
import {Container, Row, Col} from 'react-grid-system'

export default class ElectionInfo extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className='card'>Title 1 (Governer)</Col>
            <Col className='card'>Title 2 (Sec. of State)</Col>
            <Col className='card'>Title 3 (State Tresurer)</Col>
          </Row>
          <Row>
            <Col className='card'>Title 4 (Atterney General)</Col>
            <Col className='card'>Title 5 (Regent)</Col>
            <Col className='card'>Title 6 (Congress. Dist. 2)</Col>
          </Row>
          <Row>
            <Col className='card'>Title 7 (CD2 Board of Edu.)</Col>
            <Col className='card'>Title 8 (Boulder County Clerk)</Col>
            <Col className='card'>Title 9 (Boulder County Tres.)</Col>
          </Row>
          <Row>
            <Col className='card'>Title 10 (Boulder County Assessor)</Col>
            <Col className='card'>Title 11 (Boulder County Sheriff)</Col>
            <Col className='card'>Title 12 (Boulder County Surveyor)</Col>
          </Row>
          <Row>
            <Col className='card'>Title 13 (Boulder County Coroner)</Col>
          </Row>
        </Container>
      </div>
    )
  }
}
