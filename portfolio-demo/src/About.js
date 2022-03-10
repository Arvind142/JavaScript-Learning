import React, { Component, Fragment } from "react";

class About extends Component {
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
                        <div className="col-sm-6 col-md-6 d-flex p-2 justify-content-evenly">
                            <p>
                                <img src="images/about.png" width="200" height="200" className="img-fluid" alt="about" />
                            </p>
                        </div>
                        <div className="col-6 col-md-6">
                            <strong>Automation developer with <span id='NoOfYearsOfExperience'> is JavaScript enabled!</span> years of experience in
                                creation, maintenance &amp; optimization of scripts. Have also
                                worked on maintenance and enhancement of framework.</strong><br /> I'm a
                            young enthusiast who is keen on learning new languages/tools/ways to
                            get things done. <br /> During the past few years, I gained lots
                            of experience in this field due to the strong desire of becoming an
                            expert. Today I am a Automation Engineer at one of the leading MNC. <br />
                            <br /> <b> Few words to describe my work</b>
                            <ul>
                                <li>Automation Tester(Web/Windows/Api/DB)</li>
                                <li>TDD/BDD based script development</li>
                                <li>Agile Tester</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default About;