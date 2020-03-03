import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';

//Import Components
import Cards from "../components/cards"
import JumbotronContainer from "../components/jumbotron"
import NavbarContainer from "../components/navbarContainer"
import BannerContainer from "../components/bannerContainer";
import WorkContainer from "../components/workContainer"
import content from "../content/contentYAML.yaml"



const IndexPage = () => (
  <div>
    {/* importing the custom fonts */}
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Bowlby+One+SC|Permanent+Marker&display=swap" rel="stylesheet"></link>
    <NavbarContainer />
    <BannerContainer
       title = {content.banner.name}
       message = {content.banner.message}
    />
    <Cards />
    <WorkContainer />
    <footer>
    <SocialIcon url="http://twitter.com/jaketrent" />
    <SocialIcon url="http://github.com" />
    <SocialIcon url="http://linkedin.com" />
    </footer>
  </div>
  )

export default IndexPage
