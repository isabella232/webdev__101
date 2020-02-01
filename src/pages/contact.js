import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Contact = ({ siteTitle }) => (
<>
<Header />
<Container>
<h1>Contact Me</h1>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridEmailAddress">
    <Form.Label>Email Address</Form.Label>
    <Form.Control placeholder="email@example.com" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</>)

export default Contact