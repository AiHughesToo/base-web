import { combineReducers } from "redux";
// import AuthReducer from "./AuthReducer";
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    // auth: AuthReducer,
    user: userReducer,
});