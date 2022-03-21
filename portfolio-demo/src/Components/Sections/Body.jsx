import { Component, Fragment } from "react";
import About from './About/About'
import Skill from './Skills/Skill'
import Resume from './Resume/Resume'

class Body extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Skill />
                <Resume />
            </Fragment>
        )
    }
}
export default Body;