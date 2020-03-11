import React from 'react';
import { Container, Card } from 'react-bootstrap';

import './Employment.css';

const Employment = ({ cards }) => {
  const ListofCards = cards.map(({
    image,
    className,
    title,
    body,
  }) => (
    <Card className={className} style={{ backgroundImage: `url(${image})` }}>
      { title && <Card.Header>{title}</Card.Header>}
      { body && <Card.Body>{body}</Card.Body>}
    </Card>
  ));
  return (
    <Container className="employment">
      {ListofCards}
    </Container>
  );
};

export default Employment;
