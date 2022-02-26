import React, {Component} from 'react';
import './appcontent.css';

class AppContent extends Component {
    // constructor(){
    //     super();
    //     //binding this to the function
    //     this.btnHandler=this.btnHandler.bind(this);
    // }
    btnHandler = () => {
        console.log('button clicked! ',this);
    }
    render() {
        return (
            <div>
                <h3 className="app-content">Content Area of App</h3>
                <button onClick={this.btnHandler} className="btn btn-primary">Button1</button>
            </div>
        );
    }
}

export default AppContent;