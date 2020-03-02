import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardContainer from "../components/cardContainer"
import content from "../content/contentYAML.yaml"


const Cards = () => {
    const card = content && content.card || []
    return(
        <div class="top-item cards">
            <h1 className="title text-pop-up-right"> Projects </h1>
            <br />
            <CardDeck>
            {card.map((cardInfo) => {
              return  <CardContainer
                title={cardInfo.title}
                text={cardInfo.text}
                timeStamp={cardInfo.timeStamp}
                imgSrc={cardInfo.imgSrc}
                url={cardInfo.url}
            />
            })}
        </CardDeck>
    </div>
    )
};

export default Cards;
