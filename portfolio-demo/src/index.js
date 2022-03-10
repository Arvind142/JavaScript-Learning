import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';
import About from './About';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Footer />
      </Fragment>
    );
  }
}
ReactDOM.render(<Index />,
  document.getElementById('root')
);