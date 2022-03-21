import { Component, Fragment } from "react";
import LeftPanel from "./Left-side/LeftPanel";
import RightPanel from "./Right-side/RightPanel";

class Page extends Component{
    render(){
        return(
            <Fragment>
                <LeftPanel />
                <RightPanel />
            </Fragment>
        )
    }
}

export default Page;