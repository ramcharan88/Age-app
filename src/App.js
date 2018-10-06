import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

class App extends Component {
/*  state={
    age:21
  }
  onAgeUp = () =>{
    this.setState({
      ...this.state,
      age:++this.state.age
    }) }
    onAgeDown = () =>{
      this.setState({
        ...this.state,
        age:--this.state.age
      })
    }*/
  
  render() {
    return (
      <div className="App">
        <div>Age:{this.props.age}</div>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}> Age down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
return{
  age:state.age
}
}
const mapDispatchToProps = (dispach) => {
return {
  onAgeUp: () => dispach({type:'AGE_UP'}),
  onAgeDown:() => dispach({type:'AGE_DOWN'})
}
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);
