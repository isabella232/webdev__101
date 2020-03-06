import React from "react"
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import content from '../content/contentYAML.yaml'
import Fact from '../components/fact'
import NavbarContainer from "../components/navbarContainer"

const SecondPage = () => (
<>
<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Bowlby+One+SC|Permanent+Marker&display=swap" rel="stylesheet"></link>
<NavbarContainer />
<h1 className="title"> {content.about.title}</h1>
<div>
    <Card border="light">
        <Card.Body>
            <p>{content.about.description.intro}</p>
            {content.about.description.breed.title}
            <p>{content.about.description.breed.body}</p>
            <p>{content.about.description.active}</p>
            <p>{content.about.description.alert}</p>
            <p>{content.about.description.lively}</p>
            <p>{content.about.description.playful}</p>
            <p>{content.about.description.friendly}</p>
            <p>{content.about.description.obedient}</p>
            <p>{content.about.description.outro}</p>
            <p>{content.about.description.ps}</p>
            <p>{content.about.description.pps}</p>
        </Card.Body>
    </Card>
</div>
<Fact />
<div className="slider">
    <Carousel>
    {content.about.carousel.map((card)=> {
    return <Carousel.Item>
            <img
            className="d-block w-100"
            src={card.src}
            alt={card.alt}
            />
            </Carousel.Item>
    })}
    </Carousel>
</div>
</>
)
export default SecondPage
