import React, { useState } from 'react'
import axios from 'axios'

export default function User() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <div style={{ border: '1px solid #e6e6e6', margin: 10, padding: 10 }}>
            <h2>Users</h2>
            {
                loading ? <p>Loading...</p> :
                    <>
                        <button onClick={getUsers}>Get Users</button>
                        <ul>
                            {users && users.map((user, index) => (
                                <li key={index + 1}>
                                    <span>{user.name}</span>
                                    <span style={{ paddingLeft: 15 }}>{user.email}</span>
                                </li>
                            ))}
                        </ul>
                    </>
            }
        </div>
    )
}

/*
//if-else

if (condition) {
    //codes
} else {
    ///codes
}

//ternary operator - inline if-else

condition ? //codes : //codes

*/