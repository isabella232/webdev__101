import React from 'react';

import { Card } from 'react-bootstrap';

import '../styles/_BannerContainer.scss';

const BannerContainer = ({ message, title }) => (
  <Card className="bg-dark text-white border-0">
    <Card.Img src="../blackBokehcuttoff.png" alt="Home Page Banner" />
    <Card.ImgOverlay>
      <Card.Text className="banner-big-text tracking-in-expand">
        {title}
      </Card.Text>
      <Card.Text className="banner-small-text">
        {message}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
);
export default BannerContainer;
