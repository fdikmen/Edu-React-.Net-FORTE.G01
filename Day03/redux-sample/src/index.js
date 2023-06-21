import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, createStore} from 'redux';

//initial state
const initialState = {count:0}

const myReducer = (state=initialState,action)=>
{
  if(action.type==='ADD')
  {
    //state.count=state.count+action.payload
    state.count+=action.payload
  }
  return state  
}
const myReducer2 = (state=initialState,action)=>
{
  if(action.type==='ADD')
  {
    //state.count=state.count+action.payload
    state.count+=action.payload
  }
  return state  
}

const allReducer = combineReducers({myReducer,myReducer2})

const myStore = createStore(allReducer)

console.log("default =>",myStore.getState())

//subscribe
myStore.subscribe(()=>{
    console.log("subscribe =>",myStore.getState())
}
)
//action
const myAction = {type:'ADD',payload:10}

//dispatch  
myStore.dispatch(myAction)
// console.log("FIRST =>",myStore.getState())
myStore.dispatch(myAction)
// console.log("second =>",myStore.getState())
myStore.dispatch(myAction)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


