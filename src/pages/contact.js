import React from 'react';
import {
  Form,
  Col,
  Button,
  Container,
  Row,
  Jumbotron,
} from 'react-bootstrap';

import Page from '../components/Page/Page';
import Spacer from '../components/Spacer/Spacer';

const Contact = () => (
  <>
    <Page title="Contact Bodie">
      <Spacer size={5} />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <Jumbotron className="text-center">
              <h1>Contact Me</h1>
            </Jumbotron>
            <Form name="contact" method="post" className="form">
              <input type="hidden" name="form-name" value="contact" />
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="firstName" type="name" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="lastName" type="name" placeholder="Enter Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridEmailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" placeholder="email@example.com" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows="3" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Page>

  </>
);

export default Contact;
