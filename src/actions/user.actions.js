import { EMAIL_CHANGED, LOGIN_USER_SUCCESS } from './types';
import {store} from '../store/store';

export const emailChanged = (text) => {
    console.log('Im in the action');
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };

  export const loginUser = ({ email, password }) => {
      console.log('im in the action')
      console.log(email);
    return (dispatch) => {
  
      fetch('https://auth-base-api.herokuapp.com/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'email': email, 'password': password })
      })
      .then((response) => response.json())
      .then(response => loginUserSuccess(dispatch, response));
    };
  };

  const loginUserSuccess = (dispatch, response) => {
    console.log('im in login success');
    console.log(response.token);
    console.log(response);

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token: response.token,
                  userType: response.user_type,
                  fName: response.user_f_name,
                  loading: false 
        }
    });

  };
