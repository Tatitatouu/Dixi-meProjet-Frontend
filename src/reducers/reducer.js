import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users.reducers";
import loginReducer from "./login.reducer";


export default combineReducers ({
    userReducer,
    loginReducer
})