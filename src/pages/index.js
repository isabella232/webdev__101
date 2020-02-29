import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import Cards from "../components/cards"
import JumbotronContainer from "../components/jumbotron"
import NavbarContainer from "../components/navbarContainer"
import BannerContainer from "../components/bannerContainer";

const IndexPage = () => (
  <div>
    <NavbarContainer />
    <BannerContainer />
    <Cards />
    <JumbotronContainer 
      title ="Employment and Experience"
      message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    />
  </div>
  )

export default IndexPage
