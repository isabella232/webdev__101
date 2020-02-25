import React from 'react';
import content from '../content/contentYAML.yaml'

const Banner = () => {
    return(
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="banner-big-text">{content.banner.name}</div>
                    <div className="banner-small-text">{content.banner.title}</div>
                    <div className="banner-image">
                    <img src="../bwgradient.jpg" alt="fist" height="100%" width="100%"></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;
