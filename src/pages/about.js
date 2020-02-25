import React from "react"
import Header from "../components/header"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import content from '../content/contentYAML.yaml'

const SecondPage = () => (
<>
<Header />
<Container>
    <h1> {content.about.title}</h1>
    <p> {content.about.description}
    </p>
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
