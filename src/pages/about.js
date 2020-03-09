import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Site from '../components/Site';

import content from '../content/contentYAML.yaml';

const AboutPage = () => (
  <>
    <Site title="About Bodie">
      <h1 className="title">
        {' '}
        {content.about.title}
      </h1>
      <p className="title-subtext">
        {' '}
        {content.about.description}
      </p>
      <div className="slider">
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
      </div>
    </Site>

  </>
);
export default AboutPage;
