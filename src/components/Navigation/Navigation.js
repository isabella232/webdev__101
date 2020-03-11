import React from 'react';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

import { header } from '../../content/content.yaml';

import './Navigation.css';

const Navigation = () => {
  const NavLinks = header.navigation.map(({ title, link }) => <Nav.Link className="linkText" href={link} key={title}>{title}</Nav.Link>);
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="homeText" href={header.logo.link}>
          {header.logo.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {NavLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
