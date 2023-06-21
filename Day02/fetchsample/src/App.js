import React, { useEffect } from 'react'
import axios from 'axios';
const apiUrl = 'https://jsonplaceholder.typicode.com/'
export default function App() {
  const [todoList, setTodoList] = React.useState(null)
  const [post, setPost] = React.useState(null)

  useEffect(() => {
    //  fetch(apiUrl + 'todos/1')//,{method:'GET'})
    //     .then(res => res.json())
    //     .then(data => setTodoList(data))
    //     .catch(err => console.log(err))
    //     .finally(() => console.log('finally'))

    axios.get(apiUrl + 'todos/1')
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err))
      .finally(() => console.log('finally'))

  }, [])

  const getPosts = async (postId) => {
    await axios.get(apiUrl + 'posts/' + postId)
      .then(res => setPost(res.data))
      .catch(err => console.log(err))
  }

  const addUser = async () => {
    await axios.post(apiUrl + 'users', {
      name: 'John Doe',
      username: 'johndoe',
  })
  .then((response) => {console.log(response);} )
  .catch((error) => {console.log(error);} );
  }



  const updateUser = async () => {
    await axios.put(apiUrl + 'users/10', {
      name: 'John Doe',
      username: 'johndoe',
  })
  .then((response) => {console.log(response);} )
  .catch((error) => {console.log(error);} );
  }



  const deletePost = async (postId) => {
    await axios.delete(apiUrl + 'posts/' + postId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div>App
      {
        todoList && <h1>{todoList.title}</h1>
      }
      <hr />
      <button onClick={() => getPosts(3)}>Get Posts</button>
      {
        post && <h1>{post.title}</h1>
      }
      <hr />
      <button onClick={addUser}>Add User</button>
      <button onClick={updateUser}>Update User</button>
      <button onClick={() => deletePost(3)}>Delete Post</button>
    </div>
  )
}
