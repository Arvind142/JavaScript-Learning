import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// 
class Index extends Component{
    render(){
        return(
            <div class='container'>
                <h1 className="alert alert-primary text-center">
                    Component life cycle!
                </h1>
            </div>
        );
    }
}

// rendering the component
ReactDOM.render(<Index />,document.getElementById('root'));