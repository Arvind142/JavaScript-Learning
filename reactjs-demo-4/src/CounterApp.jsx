import React, { Component } from 'react';
class CounterApp extends Component {
    state = { 
        count:1
     }
     num = 1
    constructor(){
        super();
        console.log('CounterApp - Constructor called!');
        // on class load, it will call the method
    }
    render() {
        console.log('CounterApp - Render() called!');
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Counter : {this.state.count}</p>
                <button className='btn btn-secondary' 
                onClick={()=>{
                    this.setState({count:this.state.count+1});
                }}>
                    Increment count!
                </button>
                <p>Counter : {this.num}</p>

                <button className='btn btn-secondary' 
                onClick={()=>{
                    this.num++;
                    this.forceUpdate();
                }}>
                    Increment num!
                </button>
            </div>
        );
    }
    static getDerivedStateFromProps(props,state){ 
        console.log('CounterApp - getDerivedStateFromProps() called!');
        return null;
    }
    componentDidMount(){
        console.log('CounterApp - componentDidMount() called!');
        //when component is mounted, it will call the method
    }
    componentWillUnmount(){
        console.log('CounterApp - componentWillUnmount() called!');
        // when component is unmounted, it will call the method
    }
    shouldComponentUpdate(){
        console.log('CounterApp - shouldComponentUpdate() called!');
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('CounterApp - getSnapshotBeforeUpdate() called!');
        return null;
    }
    componentDidUpdate(){
        console.log('CounterApp - componentDidUpdate() called!');       
    }

}

export default CounterApp;