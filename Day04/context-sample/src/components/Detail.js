import React from 'react'
import { UserContextApi } from '../hooks/rootContextApi'
import { useContext } from 'react'

export default function Detail() {
  const {username,age} = useContext(UserContextApi)
  // console.log(value)
  return (
    <div>Detail : 
      {username} - {age}
    </div>
  )
}
