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
    <Link to={props.url}><Card.Img variant="top" src={props.imgSrc} /></Link>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      {props.text}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">{props.timeStamp}</small>
    </Card.Footer>
  </Card>
</>
)
};

export default CardContainer;