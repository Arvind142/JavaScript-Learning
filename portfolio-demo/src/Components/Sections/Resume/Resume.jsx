import React, { Component, Fragment } from "react";

class Education extends Component {
    render() {
        return (
            <Fragment>
                <div className="tab-pane fade show" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" onLoad={this.getNoOfYearsOfExperience}>
                    <div className="row g-0 d-flex p-2 justify-content-evenly" id="about">
                        <nav className="d-flex p-2 justify-content-start border">
                            <span className="mb-0 h3">Education</span>
                        </nav>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Education;