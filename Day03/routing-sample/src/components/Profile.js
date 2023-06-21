import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const params = useParams()
    console.log("PARAMS=>",params)
  return (
    <div>Profile
        <h1>USER ID : {params.userId}</h1>
    </div>
  )
}
