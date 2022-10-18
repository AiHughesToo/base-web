import { combineReducers } from 'redux';
import EmployeesReducer from './employees.reducer';
import UserReducer from './user.reducer';

export default combineReducers({
  user: UserReducer,
  employees: EmployeesReducer
});