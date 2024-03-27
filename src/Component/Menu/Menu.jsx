import React from 'react'
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import './menu.css'
import Logo from '../../assets/Logo.png'
const Menu = () => {
  return (
       <div className='menu-main'>
         <Navbar expand="lg" className='menu-bg'>
        <Container>
          <Navbar.Brand href="#home">
                <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#Product">Product</Nav.Link>
              <Nav.Link href="#Template">Template</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#Pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        <div className="login-btn">
        <a href="#">Sign in</a>
        <a href="#">Start Free</a>
        </div>
        </Container>
      </Navbar>
       </div>
  )
}

export default Menu