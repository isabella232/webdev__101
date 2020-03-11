import React from 'react';
import {
  CardDeck, Card, Container, Button,
} from 'react-bootstrap';

const Cards = ({ cards }) => {
  if (cards.length < 1) {
    return <Container>Loading Cards</Container>;
  }

  const ListOfCards = cards.map(({
    imgSrc,
    title,
    text,
    url,
  }) => (
    <Card key={title}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="outline-primary" href={url}>Learn More</Button>
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
