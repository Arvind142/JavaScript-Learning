import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Body from './Components/Sections/Body'
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}
ReactDOM.render(<Index />,
  document.getElementById('root')
);