import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './recive.css'
import ReciveImg from '../../assets/reciveimg.png'

const Recive = () => {
  return (
    <div className='recive-main'>
        <Container>
                <Row>
                        <Col lg={6}>
                        <div className="recive_text">
                                <h6>Our Feature</h6>
                                <h3>All payments are linked to your Financy account</h3>
                                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <div className="recive_btn">
                                <a href="#">Get Started</a>
                                </div>        
                        </div>
                        </Col>
                        <Col lg={6}>
                                <div className="recive_img">
                                        <img src={ReciveImg} alt="" className='w-100'/>
                                </div>
                        </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Recive