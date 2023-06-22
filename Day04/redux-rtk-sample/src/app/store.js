import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const myStore = configureStore({
    reducer: {
        userReducer,
        //other reducers
    }
})

export default myStore;