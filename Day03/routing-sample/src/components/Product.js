import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    //const prdId = window.location.pathname.split("/")[2]
    const prdId = window.location.pathname.split("/").pop()
    console.log("prdId=>",prdId)
    
    return (
      <div>Product
            <h1>PRODUCT ID : {prdId}</h1>
      </div>
    )
  }
}
