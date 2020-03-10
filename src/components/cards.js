import React from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';

// import Card from './Card';

import content from '../content/contentYAML.yaml';

const Cards = () => {
  const cards = (content && content.card) || [];
  const ListOfCards = cards.map(({
    imgSrc,
    title,
    text,
    url,
  }) => (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={url}>Learn More</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <Container>
      <CardDeck>
        {ListOfCards}
      </CardDeck>
    </Container>
  );
};

export default Cards;
