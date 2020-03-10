import React from 'react';

import {
  Container,
} from 'react-bootstrap';

import '../styles/_SectionHeader.scss';

const SectionHeader = ({ title, content }) => (
  <Container className="sectionHeader">
    <h1>{title}</h1>
    {content}
  </Container>
);

export default SectionHeader;
