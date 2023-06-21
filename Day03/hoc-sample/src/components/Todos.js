import React from 'react'
import LoadingHOC from './LoadingHOC'

function Todos({todos}) {
    return (
      <div style={{maxHeight: 200,overflow:'auto'}}>Todos
      <ul>
          {todos.map((item,index) => (
              <li key={item.id}>{index}.{item.title}</li>
          ))}
      </ul>
  </div>
    )
  }

export default LoadingHOC(Todos,'todos')