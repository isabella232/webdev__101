import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import content from '../content/contentYAML.yaml'
import NavbarContainer from "../components/navbarContainer"

const SecondPage = () => (
<>
<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Bowlby+One+SC|Permanent+Marker&display=swap" rel="stylesheet"></link>
<NavbarContainer />
<h1 className="title"> {content.about.title}</h1>
<p className="title-subtext"> {content.about.description}</p>
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
