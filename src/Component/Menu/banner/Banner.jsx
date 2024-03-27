import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from '../../../assets/bannerimg.png'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner-main'>
        <Container>
                <Row>
                <Col lg={6}>
                <div className="banner_text">
                 <h1>Managing business payments has never been easier</h1>
                 <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                 <div className="banner_btn">
                <Row>
                        <Col lg={4} xs={6} md={6} sm={6}>
                        <div className="left_btn">
                        <a href="#">Get Started</a>
                        </div>
                        </Col>
                        <Col lg={5} xs={6} md={6} sm={6}> 
                        <div className="right_btn">
                        <div className="right_inner">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                        <a href="#">See How It Works</a>
                        </div>
                        </div>
                        </Col>
                </Row>
                </div>
                </div>
                </Col>
                <Col lg={6}>
                <div className="banner_img">
                <img src={BannerImg} alt="" className='w-100'/>
                </div>
                
                </Col>
                </Row>
               
                
        </Container>
    </div>
  )
}

export default Banner