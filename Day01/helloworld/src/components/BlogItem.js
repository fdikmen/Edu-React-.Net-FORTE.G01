import React from 'react'
import BlogItemDetail from './BlogItemDetail';
import BlogItemDetailV2 from './BlogItemDetailV2';
import '../global.css'
// import mystyle from '../global.css'

export default function BlogItem(props) {
  const age = 20;
  const myParagraphStyle = {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'yellow'
  }
  return (
    <div>
      <p className='title'>Blog Item</p>
      {age}
      {5 / 2 === 2.5 ? "Yes" : "No"}
      {props.desc}

      <button id='customButton'>Click</button>
      <label htmlFor='customButton'>Click Label</label>
      <BlogItemDetail lognumber="987"/>
      <BlogItemDetailV2 lognumber="987"/>
      <p style={myParagraphStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p style={{
        color: 'blue', fontWeight: 'bolder'
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
