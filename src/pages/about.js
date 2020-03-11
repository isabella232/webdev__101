import React from 'react';
import {
  Carousel,
  Jumbotron,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Page from '../components/Page/Page';
import Spacer from '../components/Spacer/Spacer';

import content from '../content/content.yaml';

const AboutPage = () => {
  const { important } = content.about.description;
  const facts = Object.entries(important).map((value) => (
    <li key={value}>
      <strong>{value[0]}</strong>
      {' '}
      -
      {' '}
      {value[1]}
    </li>
  ));

  return (
    <>
      <Page title="About Bodie">
        <Jumbotron className="text-center" fluid bg="primary">
          <h1>{content.about.title}</h1>
        </Jumbotron>
        <Spacer size={5} />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <p className="lead">{content.about.description.intro}</p>
              <p>
                {content.about.description.message}
                :
              </p>
              <ul>{facts}</ul>
            </Col>
          </Row>
        </Container>

        <Spacer size={5} />

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <Carousel>
                {content.about.carousel.map((card) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={card.src}
                      alt={card.alt}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>

      </Page>
    </>
  );
};
export default AboutPage;
