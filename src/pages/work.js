import React from "react"
import Header from "../components/header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardContainer from "../components/cardContainer"

const Work = () => (
<>
<Header />
<Container>
    <h1> Employment </h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <br/>
<Row>
    <Col className="imageCenter">
     <CardContainer title="edmonton oil kings" text="something interesting about hockey" /> 
    </Col>
    <Col><img src="../hockey.png" alt="fist" width="50%"></img></Col>
  </Row>
  <br/>
  <Row>
    <Col>
    <img src="../hockey.png" alt="fist" width="50%"></img>
    </Col>
    <Col>
    <CardContainer title="edmonton oil kings" text="something interesting about hockey" /> 
    </Col>
  </Row>
</Container>
</>
)
export default Work
