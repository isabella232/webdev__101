import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Page from '../components/Page/Page';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import Employment from '../components/Employment/Employment';
import Spacer from '../components/Spacer/Spacer';

import content from '../content/content.yaml';

const IndexPage = () => (
  <>
    <Page title="Bodie | Personal Website">
      <Banner
        title={content.banner.name}
        message={content.banner.message}
      />

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8" className="text-center">
            <h1>Projects</h1>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col>
            <Cards cards={content.cards} />
          </Col>
        </Row>
      </Container>

      <Spacer size={5} id="employment" />

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8" className="text-center">
            <h1>{content.employment.title}</h1>
            <p>{content.employment.content}</p>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col>
            <Employment cards={content.employment.cards} />
          </Col>
        </Row>
      </Container>

    </Page>
  </>
);

export default IndexPage;
