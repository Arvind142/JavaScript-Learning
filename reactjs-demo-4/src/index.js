import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CounterApp from './CounterApp';

// 
class Index extends Component{
    state = { showCounterApp: false,
    title:'Counter App'}
    render(){
        let output = null;
        if(this.state.showCounterApp===true){
            output=<CounterApp title={this.state.title}/>
        }
        return(
            <div className='container'>
                <h1 className="alert alert-primary text-center">
                    Component life cycle!
                </h1>
                <hr />
                <button className='btn btn-primary' onClick={()=>{
                    this.setState({showCounterApp: !this.state.showCounterApp});
                }}>
                Hide/Show Counter App
                </button>
                <button className='btn btn-secondary' onClick={()=>{
                    if(this.state.title==='Counter App'){
                        this.setState({title:'Click counter App'});
                    }
                    else{
                        this.setState({title:'Counter App'});
                    }
                }}>
                Toogle the Title
                </button>
                {output}
            </div>
        );
    }
}

// rendering the component
ReactDOM.render(<Index />,document.getElementById('root'));