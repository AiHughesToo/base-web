import { LOGIN_USER_SUCCESS, REGISTER_USER } from './types';


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
                  user: response,
                  loading: false 
        }
    });

  };

  export const registerUser = ({ email, password, fName, lName }) => {
    console.log('register user action');
    return (dispatch) => {
      fetch('https://auth-base-api.herokuapp.com/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'email': email, 'password': password, 'f_name': fName, 'l_name': lName, 'account_type': 'empolyee' })
      })
      .then((response) => response.json())
      .then(response => registerUserSuccess(dispatch, response));
    }
  };

  const registerUserSuccess = (dispatch, response) => {
    console.log(response);

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
                  userType: response.user_type,
                  fName: response.user_f_name,
                  lName: response.user_l_name,
                  loading: false 
        }
    });

  };