import React from 'react';
import { Link } from 'gatsby';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const JumbotronContainer = ({ title, message, buttonText }) => (
  <div className="cards">
    <Jumbotron fluid className="jumbotron-image">
      <h1>{title}</h1>
      <p>
        {message}
      </p>
      <p>
        <Link to="/work"><Button variant="dark">{buttonText}</Button></Link>
      </p>
    </Jumbotron>
  </div>
);

export default JumbotronContainer;
