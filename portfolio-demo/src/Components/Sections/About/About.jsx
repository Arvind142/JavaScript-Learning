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
                <div className="tab-pane fade show" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" onLoad={this.getNoOfYearsOfExperience}>
                    <div className="row g-0 d-flex p-2 justify-content-evenly" id="about">
                        <nav className="d-flex p-2 justify-content-start border">
                            <span className="mb-0 h3">About</span>
                        </nav>
                    </div>
                </div>
                <img src="images/about.png" 
                className="img-fluid rounded mx-auto d-block"
                 alt="..." id="about-image">
                </img>

               </Fragment>
        );
    }
}
export default About;