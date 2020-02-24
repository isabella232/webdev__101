import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import Cards from "../components/cards"
import JumbotronContainer from "../components/jumbotron"
import content from "../content/contentYAML.yaml"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <Cards />
    <JumbotronContainer
      title = {content.index.title}
      message = {content.index.content}
    />
  </div>
  )

export default IndexPage
