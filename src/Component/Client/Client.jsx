import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './client.css'
import ClientImg from '../../assets/clientimg.png'
import { FaStar } from "react-icons/fa";

const Client = () => {
  return (
    <div>
        <Container>
                <Row>
                        <Col lg={4} xs={12} sm={12}>
                                <div className="client_text">
                                        <a href="#">Testimonials</a>
                                        <h2>Check what our clients are saying</h2>
                                </div>
                        </Col>    
                </Row>
                <Row>
                        <Col lg={6}>
                                <img src={ClientImg} alt="" className='w-100'/>
                        </Col>
                        <Col lg={{span:5,offset:1}} xs={12} sm={12}>
                                <div className="client_text_inner" >
                                        <h3>Save Time Managing Social Media For Your Business</h3>
                                        <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly. </p>
                                        <div className="second">
                                                <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy.</p>
                                        </div>
                                        <div className="iconn">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>                                      
                                        <h5>Angela Taylor</h5>
                                        <h6>CEO SAMSUNG</h6>
                                </div>
                        </Col>
                </Row>        
        </Container>
    </div>
  )
}

export default Client