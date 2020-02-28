import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"


const CardContainer = (props) => {
    return(
<>
  <Card>
    <a href={props.url}><Card.Img variant="top" src={props.imgSrc} /></a>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.text}
      </Card.Text>
    </Card.Body>
  </Card>
</>
)
};

export default CardContainer;
