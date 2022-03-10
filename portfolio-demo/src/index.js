import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import About from './Sections/About/About';
import Skill from './Sections/Skills/Skill';
import Experience from './Sections/Experience/Experience';
import Education from './Sections/Education/Education';
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Skill />
        <Experience />
        <Education />
        <Footer />
      </Fragment>
    );
  }
}
ReactDOM.render(<Index />,
  document.getElementById('root')
);