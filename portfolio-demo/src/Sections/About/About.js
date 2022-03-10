import React, { Component, Fragment } from "react";
import './About.css'

class About extends Component {
    // changeImage = () => {
    //     document.getElementById("about-image").src = "images/skill.png";
    // };
    // revertImage = () => {
    //     document.getElementById("about-image").src = "images/about.png";
    // };

    render() {
        return (
            <Fragment>
                <img src="images/about.png" 
                className="img-fluid rounded mx-auto d-block"
                 alt="..." id="about-image" 
                 onMouseOver={this.changeImage}
                 onMouseOut={this.revertImage}
                 >
                     </img>

               </Fragment>
        );
    }
}
export default About;