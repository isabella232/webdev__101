import React from 'react';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

import './Navigation.css';

const Navigation = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand className="homeText" href="/">BODIE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link className="linkText" href="/about">About Me</Nav.Link>
          <Nav.Link className="linkText" href="/#employment">Work</Nav.Link>
          <Nav.Link className="linkText" href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
