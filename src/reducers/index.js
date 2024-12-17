import { combineReducers } from "redux";
import loginReducer from './login.reducer'
import userReducer from "./users.reducers";

export default combineReducers({
    loginReducer,
    userReducer
})