import React from 'react';
import { Card } from 'react-bootstrap';

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
    <div className="employment">
      {ListofCards}
    </div>
  );
};

export default Employment;
