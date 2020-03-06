import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'

const BannerContainer = (props) => (
  <>
<Card className="bg-dark text-white border-0">
  <Card.Img src="../blackBokehcuttoff.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text className="banner-big-text tracking-in-expand">{props.title}</Card.Text>
    <Card.Text className="banner-small-text"> 
    {props.message}
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</>
)
export default BannerContainer