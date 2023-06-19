import React from 'react'

export default function BlogItem(props) {
  const age = 20;
  return (
    <div>
      Blog Item
      {age}
      {5 / 2 === 2.5 ? "Yes" : "No"}
      {props.desc}
    </div>
  )
}
