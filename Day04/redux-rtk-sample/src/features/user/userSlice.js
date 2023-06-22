import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }  // => {type:'user/fetchUser',payload:[...users...]}
);

// fetchUsers.fulfilled --> then
// fetchUsers.pending  --> loading
// fetchUsers.rejected  --> catch

const initialState =  {username:'unknown',isActive:false,loading:false,error:'' }
const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            login: (state, action) => {
                state.username = action.payload.username;
                state.isActive = action.payload.isActive;
            }
        },
        extraReducers: {
            [fetchUsers.pending]: (state) => {
                state.loading = true;
            },
            [fetchUsers.fulfilled]: (state, action) => {
                state.username = action.payload[0].name;
                state.isActive = true;
                state.loading = false;
            },
            [fetchUsers.rejected]: (state,action) => {
                state.loading = false;
                state.error = action.payload.error.message;
            }
        }
    }
);


export const {login} = userSlice.actions;
export default userSlice.reducer;