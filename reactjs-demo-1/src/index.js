import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    const footerPros = {
      website: "https://www.google.com",
      company: "Google",
      year: "2020"
    }
    return (
      <div className="app">
        <AppHeader title="Addressbook App v1.0" subheading="Created by Arvind" />
        <AppContent />
        <AppFooter {...footerPros } />
      </div>
    );
  }
}

// to send return element to DOM
ReactDOM.render(<App />, document.getElementById('root'));