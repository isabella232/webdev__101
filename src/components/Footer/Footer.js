import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button } from 'react-bootstrap';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-social">
      <SocialIcon url="http://twitter.com/" fgColor="#fff" />
      <SocialIcon url="http://github.com" fgColor="#fff" />
      <SocialIcon url="http://linkedin.com" fgColor="#fff" />
    </div>
    <Button variant="secondary" href="/contact" size="lg">Contact Bodie</Button>
  </footer>
);

export default Footer;
