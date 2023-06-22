import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { login,fetchUsers } from '../features/user/userSlice';

export default function User() {
    const username = useSelector(state => state.userReducer.username);
    const isActive = useSelector(state => state.userReducer.isActive);
    const dispatch = useDispatch();
    const addUsername = () => {
        /*const myAction = {type:'user/login',payload:{username:'John'}};
        dispatch(myAction);*/
        dispatch(
            login({username:'John' + Math.floor(Math.random() * 100),isActive:true })
        )
        dispatch(fetchUsers())
    }
  return (
    <div>User : {username}<br/>
    User Is Active ? : {isActive ? "Yes":"No"}<br/>
        <button onClick={addUsername}>Add Username</button>
    </div>
  )
}
