import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { combineReducers, createStore,Provider } from 'redux';

//initial state
const initialState = { count: 0 }

const myReducerSlice = (state = initialState, action) => {
  if (action.type === 'ADDSlice01Count') {
    //state.count=state.count+action.payload
    state.count += action.payload
  }
  return state
}
const myReducerSlice2 = (state = initialState, action) => {
  if (action.type === 'ADDSlice02Count') {
    //state.count=state.count+action.payload
    state.count += action.payload
  }
  return state
}

const myReducer = combineReducers({ myReducerSlice, myReducerSlice2 })

const myStore = createStore(myReducer)

console.log("default =>", myStore.getState())

//subscribe
myStore.subscribe(() => {
  console.log("subscribe =>", myStore.getState())
}
)
//action object
const myAction = { type: 'ADDSlice01Count', payload: 10 }

//dispatch  
myStore.dispatch(myAction)
// console.log("FIRST =>",myStore.getState())
myStore.dispatch(myAction)
// console.log("second =>",myStore.getState())
myStore.dispatch(myAction)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);


