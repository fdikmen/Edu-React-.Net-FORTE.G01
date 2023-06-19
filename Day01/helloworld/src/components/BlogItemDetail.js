//rcc snippet
import React, { Component } from 'react'
//CLASS COMPONENT = STATEFULL COMPONENT
export default class BlogItemDetail extends Component {
//CLASS ATTRIBUTES
  //rconst snippet
  constructor(props) {
    super(props)
    console.log("BlogItemDetail constructor");
  }
  state ={
    name: "John",age: 20,isLoading: false
  }
  render() {
    //JS Codes
    // let name = "John"
    console.log("BlogItemDetail render");
    //Arrow Function
    const sayAge = () => { console.log("Hi 123") };
    const sayHi = function (user, age) {
      alert("Hi " + user + "! Age: " + age);
    }

    const changeName = () => {
      //name = "Peter";
      this.setState({name: "Peter"})
      console.log("NEW=>",this.state.name);
    }

    return (
      <div>
        <h1>Blog Item Detail = {this.state.name}</h1>
        <h2>
          {this.props.lognumber}
        </h2>
        <button onClick={sayAge}>Back</button>
        <button onClick={() => sayHi("John", 20)}>Say Hi</button>
        <button onClick={changeName}>Change Name</button>
        <p>
          {this.state.isLoading ? "Loading..." : "Loaded"}
          <br/>
          {this.state.name}
        </p>
      </div>
    )
  }
}
