//rcc snippet
import React, { Component } from 'react'

export default class ClassComp extends Component {

  state = {
    counter: 0
  }

  //rconst snippet
  constructor(props) {
    super(props)
    console.log('1.Constructor runned!')
  }

  //cdm snippet
  componentDidMount() {
    console.log('3.ComponentDidMount runned!')
    // API calls, subscriptions, ...
  }

  //cdup snippet
  componentDidUpdate(prevProps, prevState) { 
    console.log('4.ComponentDidUpdate runned!')
    console.log('prevState:', prevState,'currentState:', this.state)
   }

   //cwun snippet
   componentWillUnmount() {
      console.log('5.ComponentWillUnmount runned!')
      // Clear timers, intervals, ...
    }

  //scu snippet
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate runned!')
    if (nextState.counter >5) {
      return false; // render() will not run
    }
    return true; // render() will run
  };
  

  render() {
    console.log('2.Render runned!')
    return (
      <div>ClassComp
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
      </div>
    )
  }
}
