import {createSlice} from '@reduxjs/toolkit';



const userSlice = createSlice(
    {
        name: 'user',
        initialState: {username:'unknown',isActive:false},
        reducers: {
            login: (state, action) => {
                state.username = action.payload.username;
                state.isActive = action.payload.isActive;
            }
        },
        extraReducers: {}
    }
);


export const {login} = userSlice.actions;
export default userSlice.reducer;