import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Site from '../components/Site';
import SectionHeader from '../components/SectionHeader';

import content from '../content/contentYAML.yaml';

const AboutPage = () => (
  <>
    <Site title="About Bodie">
      <SectionHeader
        title={content.about.title}
        content={content.about.description}
      />

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
