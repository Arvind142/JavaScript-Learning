import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Btn = ({caption,handler}) => { 
    return (<button className="btn btn-primary" onClick={handler}>
        {caption}
    </button>);
};

class Index extends Component {
    state = { num: 0 }

    // increment = () => {
    //     // this.setState runs render again so that correct valeu is shown on ui
    //     // this.setState should not be used in render as it will lead to infinite looping
    //     this.setState({num: this.state.num + 1});
    // }

    // decrement = () => {
    //     this.setState({num: this.state.num -1});
    // }

    incrementORdecrement = (iod) => {
        this.setState({ num: this.state.num + iod });
    }

    render() {
        console.log('render invoked', new Date());
        return (
            <div className="container">

                <h1 className="alert alert-primary">Hello React!</h1>

                <h3>value of num : {this.state.num}</h3>

                <Btn caption="Increment" handler={()=>this.incrementORdecrement(1)} />

                <Btn caption="Decrement" handler={()=>this.incrementORdecrement(-1)} />
            </div >
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));