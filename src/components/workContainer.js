import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardContainer from './cardContainer';

const WorkContainer = () => (
  <>
    <Row>
      <Col className="cards">
        <CardContainer title="Chief Moral Officer" text="I am proud to say that everyday I make a lasting contribution to the team at Jobber. I bring so many smiles to peoples faces and singlehandedly increase moral. As one of the longest standing Jobber employee's I have had a lasting impact and my legacy will forever live on at Jobber." />
      </Col>
      <Col className="cards"><img src="../jobber-share.jpg" alt="Marble Slab" width="100%" /></Col>
    </Row>
    <br />
    <Row>
      <Col className="cards">
        <img src="../bodieBall.jpg" alt="Bodie Ball" width="100%" />
      </Col>
      <Col className="cards">
        <CardContainer title="Professional Ball Retreiver" text="My years before Jobber helped to prepare me for what was to come. I spent hours tirelessly running and retreiving, then returning objects. Run, retreive, return... run, retreive, return! Over and over. I am very highly skilled at this." />
      </Col>
    </Row>
  </>
);
export default WorkContainer;
