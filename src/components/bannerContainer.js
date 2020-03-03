import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'

const BannerContainer = (props) => (
  <div>
<Card className="bg-dark text-white">
  <Card.Img src="../bwgradient.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text className="banner-big-text tracking-in-expand">{props.title}</Card.Text>
    <Card.Text className="banner-small-text"> 
    {props.message}
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
)
export default BannerContainer