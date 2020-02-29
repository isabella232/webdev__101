import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'

const BannerContainer = () => (
  <div>
<Card className="bg-dark text-white">
  <Card.Img src="../bwgradient.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text className="banner-big-text">BODIE</Card.Text>
    <Card.Text className="banner-small-text"> 
    The one and only Jobber cheif moral officer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</div>
)
export default BannerContainer