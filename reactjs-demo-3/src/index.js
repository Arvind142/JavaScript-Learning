import React, {Component} from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Index extends Component {
    render(){
        return (
            <div className='container'>
                <h1 className='alert alert-primary'>Using ref's (Uncontrolled component)</h1>
            </div>
        );
    }
}

ReactDom.render(<Index />, document.getElementById('root'));