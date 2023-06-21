import React from 'react'
import LoadingHOC from './LoadingHOC'

const  Posts =({posts})=> {
  return (
    <div style={{maxHeight: 200,overflow:'auto'}}>Posts
    <ul>
        {posts.map((item,index) => (
            <li key={item.id}>{index}.{item.title}</li>
        ))}
    </ul>
</div>
  )
}

export default LoadingHOC(Posts,'posts')
