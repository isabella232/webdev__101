import React from 'react';
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

const JumbotronContainer = (props) => {
    return(
        <div class="cards">
        <Jumbotron fluid>
            <h1>{props.title}</h1>
            <p>
                {props.message}
            </p>
            <p>
            <Link to="/work"><Button variant="dark">{props.buttonText}</Button></Link>
            </p>
        </Jumbotron>
        </div>
    )
};

export default JumbotronContainer;
