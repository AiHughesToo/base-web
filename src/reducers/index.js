import { combineReducers } from 'redux';
// import AuthReducer from './AuthReducer';
// import JobReducer from './JobReducer';
import UserReducer from './user.reducer';

export default combineReducers({
  user: UserReducer
});