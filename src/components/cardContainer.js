import React from 'react';
import Card from 'react-bootstrap/Card';

const CardContainer = ({
  url,
  imgSrc,
  title,
  text,
}) => (
  <>
    <Card>
      <a href={url}>
        <Card.Img variant="top" src={imgSrc} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default CardContainer;
