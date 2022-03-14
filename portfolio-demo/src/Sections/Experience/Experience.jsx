import React, { Component, Fragment } from "react";

class Experience extends Component {
    getNoOfYearsOfExperience = () => {
        let today = new Date();
        let olday = new Date("23 July 2018");
        let yrs = today.getFullYear() - olday.getFullYear();
        let months = today.getMonth() - olday.getMonth();
        if (months < 0) {
            yrs--;
        }
        months = months < 0 ? 12 + months : months;
        // console.log('yrs', yrs, 'months', months)
        document.getElementById('NoOfYearsOfExperience').innerHTML=yrs + '.' + months;
    };

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
            </Fragment>
        );
    }
}
export default Experience;