import React, {Component} from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import ContactForm_unControlled from './ContactForm_unControlled.js';
import ContactForm_Controlled from './ContactForm_Controlled.js';
import ContactForm_Validation from './ContactForm_Validation';

class Index extends Component {
    render(){
        return (
            <div className='container'>
                <h1 className='alert alert-info'>Using ref's (Uncontrolled Or Controlled component)</h1>
                <div className="row">
                    <ContactForm_Validation />
                </div>
            </div>
        );
    }
}

ReactDom.render(<Index />, document.getElementById('root'));