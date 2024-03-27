import React from 'react'
import './residence.css'
import { Container, Row, Col } from 'react-bootstrap'

const Residence = () => {
  return (
 <div className="residence_mainnn">
                <Container>
            <div className="residence_main">
                <Row>
                <Col lg={8}>
               <div className="residence_text">
                       <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
               </div>
                </Col>
                <Col lg={{ span:3,offset:1}}>
                        <div className="residence_text_inner">
                        <a href="#">Get Started</a>
                        </div>
                </Col>    
                </Row>
            </div>
        </Container> 
 </div>
  )
}

export default Residence