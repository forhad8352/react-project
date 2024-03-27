import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Balan from '../../assets/balan.png'
import './balance.css'

const Balance = () => {
  return (
    <div className='balance-main'>
        <Container>
        <Row>
                <Col lg={6}>
                        <div className="balance_innerimg">
                                <img src={Balan} alt="" className='w-100'/>
                        </div>
                </Col>
                <Col lg={6} xs={12} sm={12}>
                        <div className="balance_inner_text">
                                <h6>Our Feature</h6>
                                <h3>Receive payments quickly from anywhere</h3>
                                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <div className="balance_inner_btn">
                                <a href="#">Get Started</a>
                                </div>        
                        </div>
                </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Balance