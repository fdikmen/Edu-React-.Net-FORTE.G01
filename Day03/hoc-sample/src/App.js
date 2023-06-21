import React, { useState } from 'react'
import Users from './components/Users'
import Posts from './components/Posts'
import Todos from './components/Todos'
const apiUrl = 'https://jsonplaceholder.typicode.com'
const App = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    // setLoading(true)
    const response = await fetch(apiUrl + '/users')
    const data = await response.json()
    setUsers(data)
    // setLoading(false)
  }

  const fetchPosts = () => {
    setTimeout(async () => {
      // setLoading(true)
      const response = await fetch(apiUrl + '/posts')
      const data = await response.json()
      setPosts(data)
      // setLoading(false)
    }
      , 5000)
  }

  const fetchTodos = async () => {
    // setLoading(true)
    setTimeout(async () => {
      const response = await fetch(apiUrl + '/todos')
      const data = await response.json()
      setTodos(data)
    }, 3000);
    // setLoading(false)
  }
  const clearState = () => {
    setUsers([])
    setPosts([])
    setTodos([])
  }

  const fetchAll = () => {
    clearState()
    fetchUsers()
    fetchPosts()
    fetchTodos()
  }

  return (
    <div>App
      <button onClick={fetchAll}>Fetch All</button>
      <Users users={users} />
      <Posts posts={posts} />
      <Todos todos={todos} />
    </div>
  )
}

export default App