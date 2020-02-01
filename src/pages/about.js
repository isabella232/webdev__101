import React from "react"
import Header from "../components/header"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const SecondPage = () => (
<>
<Header />
<Container>
    <h1> About Tyler Santos </h1>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    
    <div className="slider">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../apple.JPG"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Photo Number One</h3>
            <p>Description number one.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="arcade.JPG"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="saskatoon.JPG"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
</Container>

</>
)
export default SecondPage
