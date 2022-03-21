import React, { Component } from 'react';
import './Sharingan.css'

class Sharingan extends Component {
    render() {
        return (
            <img src={this.props.path} id='image-logo' alt='Sharingan' className='header-logo' />
        );
    }
}

export default Sharingan;