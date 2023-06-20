import React,{useState} from 'react'
import ClassComp from './components/ClassComp'
import FuncComp from './components/FuncComp'

export default function App() {
  const [showClass, setShowClass] = useState(true)
  const [showFunc, setShowFunc] = useState(true)
  return (
    <div>
      {
        showClass && <ClassComp />
      }
      <hr />
      {
        showFunc && <FuncComp />
      }
      <hr />
      <button onClick={() => setShowClass(!showClass)}>Toggle ClassComp</button>
      <button onClick={() => setShowFunc(!showFunc)}>Toggle FuncComp</button>
    </div>
  )
}


//if-else => &&

/*if (condition) {
  ...
} else {
  return null/true
}
*/