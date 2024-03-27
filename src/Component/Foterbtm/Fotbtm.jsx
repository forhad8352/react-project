import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './fotbtm.css'

const Fotbtm = () => {
  return (
    <div className='footer-bottom'>
        <Container>
                <Row>
                        <Col lg={4} xs={8} sm={8} md={8}>
                                <div className="ftr_btm_left">
                                        <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                                </div>
                        </Col>
                        <Col lg={{span:2,offset:6}} xs={4} sm={4} md={4}>
                                <div className="ftr_btm_right">
                                        <p>Supported by Microsoft Startup</p>
                                </div>
                        </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Fotbtm