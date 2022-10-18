import { REQUEST_ALL_USERS } from '../actions/types';

const INITIAL_STATE = {
loading: false,
error: '',
requestSuccess: false,
employeeList: [
    {
        "id": 1,
        "f_name": "first",
        "l_name": "user",
        "email": "a@a.com",
        "account_type": "employee"
    },
    {
        "id": 2,
        "f_name": "alex",
        "l_name": "hughes",
        "email": "alex@aihughes.dev",
        "account_type": "empolyee"
    }
]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case REQUEST_ALL_USERS:
        console.log('Im in the reducer');
        console.log(action.payload);
      return { ...state};
    default:
    return state;
    }
};