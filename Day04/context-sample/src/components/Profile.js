// useREF LESSON

import React, { useRef } from 'react'
import Detail from './Detail'

export default function Profile() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  return (
    <div>Profile
      <hr />
      <input ref={inputNameRef}
        type="text" placeholder="Enter your name" />

<button type='button' onClick={() => {console.log(inputNameRef.current)
  inputNameRef.current.focus(); }}>Focus Name</button>
      
      
      <br />


      <input
        ref={inputAgeRef}
        type="text" placeholder="Enter your age" 
        id='123'
        name='age'
        style={{color:'red'}}/>
      <br />
      <button type='button' onClick={() => {console.log(inputAgeRef.current.id)
      inputAgeRef.current.id='543'
      console.log(inputAgeRef.current.id)
        inputAgeRef.current.focus(); }}>Focus Age</button>

      <hr />
      <Detail />
    </div>
  )
}
