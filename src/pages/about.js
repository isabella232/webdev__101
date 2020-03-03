import React from "react"
import Fact from "../components/fact"
import Header from "../components/header"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import content from '../content/contentYAML.yaml'

const description = content.about.description

const SecondPage = () => (
<>
<Header />
<Container>
    <h1> {content.about.title}</h1>
    <div>
        <Card border="light">
            <Card.Body>
                <p>{description.intro}</p>

                {description.breed.title}
                <p>{description.breed.body}</p>

                <p>{description.active}</p>

                <p>{description.alert}</p>

                <p>{description.lively}</p>

                <p>{description.playful}</p>

                <p>{description.friendly}</p>

                <p>{description.obedient}</p>

                <p>{description.outro}</p>

                <p>{description.ps}</p>

                <p>{description.pps}</p>
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
                <Carousel.Caption>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </Carousel.Caption>
                </Carousel.Item>
        })}
        </Carousel>
    </div>
</Container>

</>
)
export default SecondPage
