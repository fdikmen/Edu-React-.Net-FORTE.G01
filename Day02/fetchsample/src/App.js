import React, { useEffect } from 'react'
import axios from 'axios';

export default function App() {
  const [todoList, setTodoList] = React.useState(null)

  useEffect(() => {
  //  fetch('https://jsonplaceholder.typicode.com/todos/1')//,{method:'GET'})
  //     .then(res => res.json())
  //     .then(data => setTodoList(data))
  //     .catch(err => console.log(err))
  //     .finally(() => console.log('finally'))

      axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err))
      .finally(() => console.log('finally'))

  }, [])

  return (
    <div>App
      {
        todoList && <h1>{todoList.title}</h1>
      }
    </div>
  )
}
