import React from 'react';
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const JumbotronContainer = (props) => {
    return(
        <div class="cards">
        <Jumbotron fluid className="jumbotron-image">
            <h1>{props.title}</h1>
            <p>
                {props.message}
            </p>
            <p>
                <Link to="/work"><Button variant="dark">Learn more</Button></Link>
            </p>
        </Jumbotron>
        </div>
    )
};

export default JumbotronContainer;