import React from 'react';
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

const BannerContainer = ({ message, title }) => (
  <>
    <Card className="bg-dark text-white border-0">
      <Card.Img src="../blackBokehcuttoff.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text className="banner-big-text tracking-in-expand">{title}</Card.Text>
        <Card.Text className="banner-small-text">
          {message}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  </>
);
export default BannerContainer;
