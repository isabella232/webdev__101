import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <SocialIcon url="http://twitter.com/" fgColor="#fff" />
    <SocialIcon url="http://github.com" fgColor="#fff" />
    <SocialIcon url="http://linkedin.com" fgColor="#fff" />
  </footer>
);

export default Footer;
