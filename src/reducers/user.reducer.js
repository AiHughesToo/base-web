import { EMAIL_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
email: '',
password: '',
user: null,
userType: '',
fName: 'alex',
token: '',
loading: false,
error: '',
requestSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case EMAIL_CHANGED:
        console.log('Im in the reducer');
    return { ...state, email: action.payload };
    case LOGIN_USER_SUCCESS:
        console.log('Im in the reducer');
        console.log(action.payload);
      return { ...state,
        user: action.payoad,
        token: action.payload.token,
        fName: action.payload.fName,
        userType: action.payload.userType,
        password: ''};
    default:
    return state;
    }
};