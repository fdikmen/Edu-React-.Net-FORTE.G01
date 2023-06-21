import React from 'react'
import LoadingHOC from './LoadingHOC'

const Users = ({ users, loading }) => {
    return (
        <div>Users
            {/* {
                loading ? <div>Loading...</div> :
                    <ul>
                        {users.map((item, index) => (
                            <li key={item.id}>{index}.{item.name}</li>
                        ))}
                    </ul>
            } */}

            <ul>
                {users.map((item, index) => (
                    <li key={item.id}>{index}.{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default LoadingHOC(Users,'users')

/*
export default function Users() {
  return (
    <div>Users</div>
  )
}

*/

