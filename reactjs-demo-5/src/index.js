import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends Component {
  render(){
    return(
      <div className='container'>
        <h1 className='alert alert-primary'>Working with arrays</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);