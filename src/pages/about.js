import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import content from '../content/contentYAML.yaml';
import Fact from '../components/fact';
import Page from '../components/Page/Page';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => (
  <>
    <Page title="About Bodie">
      <SectionHeader
        title={content.about.title}
        content={(
          <div>
            <p>{content.about.description.intro}</p>
            {content.about.description.breed.title}
            <p>{content.about.description.breed.body}</p>
            <div>
              <li>{content.about.description.active}</li>
              <li>{content.about.description.alert}</li>
              <li>{content.about.description.lively}</li>
              <li>{content.about.description.playful}</li>
              <li>{content.about.description.friendly}</li>
              <li>{content.about.description.obedient}</li>
            </div>
            <p>{content.about.description.outro}</p>
            <p>{content.about.description.ps}</p>
            <p>{content.about.description.pps}</p>
          </div>
                  )}
      />
      <Fact />


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
    </Page>
  </>
);
export default AboutPage;
