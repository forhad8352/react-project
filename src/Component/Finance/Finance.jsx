import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './finance.css'

const Finance = () => {
  return (
    <div>
        <Container className='finance_colr'>
                <Row>
                        <Col lg={12} className='text-center'>
                                <div className="finance_text">
                                        <h6>Why Financy</h6>
                                        <h2>Why Choose UsWhy Choose Us</h2>
                                </div>
                        </Col>
                </Row>
                <Row>
                    <Col lg={{ span:5,offset:1}} xs={12} sm={12} md={6}>
                        <div className="finance_inner">
                                <div className="circle">

                                </div>
                                <div className="finance_inner_text">
                                        <h3>No Extra Fee</h3>
                                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                                
                        </div>
                    </Col>    
                    <Col lg={{ span:5,offset:0}} xs={12} sm={12} md={6}>
                        <div className="finance_inner">
                                <div className="circle">

                                </div>
                                <div className="finance_inner_text">
                                        <h3>No Extra Fee</h3>
                                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                                
                        </div>
                    </Col>    
                    <Col lg={{ span:5,offset:1}} xs={12} sm={12} md={6}>
                        <div className="finance_inner">
                                <div className="circle">

                                </div>
                                <div className="finance_inner_text">
                                        <h3>No Extra Fee</h3>
                                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                                
                        </div>
                    </Col>    
                    <Col lg={{ span:5,offset:0}} xs={12} sm={12} md={6}>
                        <div className="finance_inner">
                                <div className="circle">

                                </div>
                                <div className="finance_inner_text">
                                        <h3>No Extra Fee</h3>
                                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                                </div>
                                
                        </div>
                    </Col>    
                </Row>

        </Container>
    </div>
  )
}

export default Finance