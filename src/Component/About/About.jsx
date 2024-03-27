import React from 'react'
import './about.css'
import { Col, Container, Row } from 'react-bootstrap'
import Group from '../../assets/Group.png'
import Group1 from '../../assets/Group1.png'
import Group2 from '../../assets/Group2.png'
import Group3 from '../../assets/Group3.png'
import Group4 from '../../assets/Group4.png'
import Group5 from '../../assets/Group5.png'

const About = () => {
  return (
    <div className='about-main'>
        <Container>
                <div className="text-center row">
                <Col lg={12}>
                        <div className="about_text">
                                <p>Over 32k+ software  businesses growing with AR Shakir</p>
                        </div>
                     </Col>
                </div>
                <Row>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group} alt=""/>
                        </div>
                </Col>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group1} alt="" />
                        </div>
                </Col>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group2} alt=""/>
                        </div>
                </Col>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group3} alt="" />
                        </div>
                </Col>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group4} alt=""/>
                        </div>
                </Col>
                <Col lg={2} xs={4} sm={4}>
                        <div className="about_img">
                                <img src={Group5} alt=""/>
                        </div>
                </Col>
                </Row>
               
        </Container>
    </div>
  )
}

export default About