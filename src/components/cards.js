import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardContainer from "../components/cardContainer"

const Cards = () => {
    return(
        <div class="top-item cards">
            <CardDeck>
            <CardContainer
                title="Arcade Machine"
                text="This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer."
                timeStamp="Last updated 1 month ago"
                imgSrc="../arcade.png"
                url="../about"
            />
            <CardContainer
                title="Simon"
                text="This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer."
                timeStamp="Last updated 3 years ago"
                imgSrc="../simon.png"
                url="../about"
            />
             <CardContainer
                title="Fanorona"
                text="This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer."
                timeStamp="Last updated 2 years ago"
                imgSrc="../fanorona.png"
                url="../about"
            />
        </CardDeck>
    </div>
    )
};

export default Cards;