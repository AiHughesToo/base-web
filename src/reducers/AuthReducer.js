import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, NAME_CHANGED} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    token: '',
    user: null,
    error: '',
    accountType: '',
    userName: '',
    requestSuccess: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
          return { ...state, email: action.payload };
        case NAME_CHANGED:
          return { ...state, userName: action.payload };
        case PASSWORD_CHANGED:
          return { ...state, password: action.payload };
        case LOGIN_USER:
          return { ...state, error: '', loading: true };
        case LOGIN_USER_SUCCESS:
          return { ...state,
            user: action.payoad,
            token: action.payload.token,
            userName: action.payload.userName,
            loading: action.payload.loading,
            accountType: action.payload.user_type,
            password: ''};
        default:
          return state;
      }
};