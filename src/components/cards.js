import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import CardContainer from './cardContainer';

import content from '../content/contentYAML.yaml';


const Cards = () => {
  const card = (content && content.card) || [];
  return (
    <div className="top-item cards">
      <CardDeck>
        {card.map((cardInfo) => (
          <CardContainer
            title={cardInfo.title}
            text={cardInfo.text}
            timeStamp={cardInfo.timeStamp}
            imgSrc={cardInfo.imgSrc}
            url={cardInfo.url}
          />
        ))}
      </CardDeck>
    </div>
  );
};

export default Cards;
