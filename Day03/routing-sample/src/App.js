import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import RootRouter from './route/RootRouter'

export default function App() {
  return (
    <div>
      <h1>React Router DOM Sample</h1>
      <h3>LINKS</h3>
      <Link to="/users" style={{ color: 'red' }} target='_blank'>Users</Link> <br />
      <Link to="/todos">Todos</Link><br />

      <NavLink to="/profile/321/654" style={({ isActive }) => {
        return {
          color: isActive ? 'red' : 'green',
          fontWeight: isActive ? 'bold' : 'normal'
        }
      }
      }
      >Profile</NavLink> <br />
      <hr />
      {/* <h3>ANCHORS - A TAG</h3>
      <a href="/users">Users</a><br/>
      <a href="/todos">Todos</a><br/>
      <hr/> */}

      <RootRouter />


    </div>
  )
}

/*
const Users = () => <div>
  <h1>Users</h1>
</div>

const Todos = () => <div>
  <h1>Todos</h1>
</div>

*/
