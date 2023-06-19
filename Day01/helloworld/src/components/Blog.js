//created by rcc snippet
import React, { Component } from 'react'
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';

export default class Blog extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    usernum: PropTypes.number
  }
  static defaultProps = {
    usernum: 123,
    username: "USER001"
  }

  //CLASS ATTRIBUTES
  // constructor , state , methods, lifecycle methods
  render() {
    // JS Codes here
    const name = "Tommy";
    console.log("Blog PROPS=>", this.props);
    return (
      // JSX CODES HERE (JSX=JS + XML)
      <>
      <hr/>
      Blog
        <h1 className="btn btn-danger">
          This is a simple example of React Component
          {this.props.username} - {this.props.usernum}
        </h1>
        <h2>
          {name}
        </h2>
        <label htmlFor="name">Name {4+5}</label>
        <button onClick={()=>alert("Hello World")}>Click Me</button>
        <hr/>
        <BlogItem desc="TEST TEST" />
      <hr/>
      </>
    )
  }
}
