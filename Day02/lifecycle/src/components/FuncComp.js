//rfc snippet
import React,{useState,useEffect} from 'react'

export default function FuncComp() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  //Constructor X

/*
useEffect(PARM1,PARM2)
PARM1: callBackFunction
PARM2: array
*/
/*
useEffect(() => {
  console.log('3.ComponentDidMount runned!')
},[])

useEffect(() => {
  console.log('4.ComponentDidUpdate runned!')
},[counter,name]) // componentDidUpdate

useEffect(() => {
  //ComponentWillUnmount
  return () => {
    console.log('5.ComponentWillUnmount runned!')
  }
},[]) // componentWillUnmount
*/

useEffect(() => {
  console.log('ComponentDidMount && componentDidUpdate runned!')

  return () => {
    console.log('ComponentWillUnmount runned!')
  }
}, [counter])

/*if(counter > 5){
  return <div> No Comment!</div>
}*/

console.log('2.Render runned!')
  return (
    <div>FuncComp
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter+1) }>+</button>
    </div>
  )
}
