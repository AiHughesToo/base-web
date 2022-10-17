import { LOGIN_USER_SUCCESS, REGISTER_USER } from '../actions/types';

const INITIAL_STATE = {
email: '',
password: '',
user: null,
userType: '',
fName: '',
token: '',
loading: false,
error: '',
requestSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case LOGIN_USER_SUCCESS:
        console.log('Im in the reducer');
        console.log(action.payload);
      return { ...state,
        user: action.payoad,
        token: action.payload.token,
        fName: action.payload.fName,
        userType: action.payload.userType,
        password: ''};
        case REGISTER_USER:
            console.log(' Register the user reducer');
            return {
                ...state,
                fName: action.payload.fName,
                lName: action.payload.lName,
                userType: action.payload.userType
            }
    default:
    return state;
    }
};