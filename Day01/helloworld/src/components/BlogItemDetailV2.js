//rfc snippet
import React, { useState } from 'react'
//FUNCTIONAL COMPONENT = STATELESS COMPONENT

export default function BlogItemDetailV2(props) {
    //JS Codes
    // let name = "John"
    console.log("BlogItemDetail render");
    //Arrow Function
    const sayAge = () => { console.log("Hi 123") };
    const sayHi = function (user, age) {
        alert("Hi " + user + "! Age: " + age);
    }

    const [name, setName] = useState("John");
    const [age, xxxxyyyy] = useState(20);
    const [isLoading, setIsLoading] = useState(false);

    const changeName = () => {
        //name = "Peter";
        setName("Peter")
        xxxxyyyy(30)
        console.log("NEW=>",name);
      }
    return (

        <div>
        <h1>Blog Item Detail = {name}</h1>
        <h2>
          {props.lognumber}
        </h2>
        <button onClick={sayAge}>Back</button>
        <button onClick={() => sayHi("John", 20)}>Say Hi</button>
        <button onClick={changeName}>Change Name</button>
        <p>
          {isLoading ? "Loading..." : "Loaded"}
          <br/>
          {name}
        </p>
      </div>
    )
}
