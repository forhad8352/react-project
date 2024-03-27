import React from 'react'
import {Col, Container, Row,} from 'react-bootstrap'
import './payment.css'
import PayImg from '../../assets/payimg.png'

const Payment = () => {
  return (
        <div className='payment-main'>
        <Container>
                <Row>
                        <Col lg={6} xs={12} sm={12}>
                        <div className="payment_text">
                                <h6>Our Feature</h6>
                                <h3>All payments are linked to your Financy account</h3>
                                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <div className="payment_btn">
                                <a href="#">Get Started</a>
                                </div>        
                        </div>
                        </Col>
                        <Col lg={6}>
                                <div className="payment_img">
                                       <img src={PayImg} alt="" className='w-100' /> 
                                </div>
                        </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Payment