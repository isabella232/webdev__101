import React from "react"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import NavbarContainer from "../components/navbarContainer"

const SecondPage = () => (
<>
<NavbarContainer />
<Container>
    
    <div className="slider">
        <Carousel>
        <Carousel.Item>
            <img
             className="d-block w-100"
            src="../apple.JPG"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
             className="d-block w-100"
            src="../arcade.JPG"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
             className="d-block w-100"
            src="../saskatoon.JPG"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
</Container>

</>
)
export default SecondPage
