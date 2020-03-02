import React from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarContainer from "../components/navbarContainer"

const Contact = ({ siteTitle }) => (
<>
<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Bowlby+One+SC|Permanent+Marker&display=swap" rel="stylesheet"></link>
<NavbarContainer />
<h1 class="title">Contact Me</h1>
<Form name="contact" method="post" className="form">
<input type="hidden" name="form-name" value="contact" />
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control name = "firstName" type="name" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control name = "lastName" type="name" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridEmailAddress">
    <Form.Label>Email Address</Form.Label>
    <Form.Control name = "email" placeholder="email@example.com" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Message</Form.Label>
    <Form.Control name = "message" as="textarea" rows="3" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</>)

export default Contact