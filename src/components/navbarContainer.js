import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


//Import Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarContainer = () => (
  <div>
    <Navbar bg="light" expand="lg" className="naver">
    <Navbar.Brand className = "homeText" href="/">Bodie</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Link className="linkText" href="/about">About Me</Nav.Link>
        <Nav.Link className="linkText" href="/#employment">Work</Nav.Link>
        <Nav.Link className="linkText" href="/contact">Contact Me</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

</div> 
)

export default NavbarContainer