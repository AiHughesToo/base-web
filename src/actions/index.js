import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_BLANK_ERROR, NAME_CHANGED,  LOGIN_USER_SUCCESS } from './types';

export const emailChanged = (text) => {
    console.log("im in the action!")
    return {
    type: EMAIL_CHANGED,
    payload: text
    };
};

// export const passwordChanged = (text) => {
//     return {
//     type: PASSWORD_CHANGED,
//     payload: text
//     };
// };

export const nameChanged = (text) => {
    return {
    type: NAME_CHANGED,
    payload: text
    };
};

// export const setLoading = (loadingState) => {
//     console.log(loadingState);
//     return {      
//     type: SET_LOADING,
//     payload: { loading: loadingState}
//     };

// };

export const loginUser = ({ email, password }) => {
    if (email === '' || password === '') {
        return { type: LOGIN_BLANK_ERROR, payload: {error: 'email or password is blank.'} };
    }
        return (dispatch) => {
   
        dispatch({ type: LOGIN_USER });

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

    if (response.errors) {
        console.log('error at login');
    //   dispatch({ type: LOGIN_USER_FAIL });
    }

    if (response.token) {
        dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token: response.token,
                user_type: response.user_type,
                userName: response.user_name,
                loading: false }});
        // Keyboard.dismiss();
        // if (response.user_type == 'rider') {
        // let token = response.token
        // Actions.rider();
        // }
        // if (response.user_type == 'client') {
        // Actions.client();
        // }
    }
};
// export const logOutUser = () => {
//     return (dispatch) => {
//     dispatch({ type: LOG_OUT });
//     Actions.auth();
//     }
// };



// export const registerUser = ({ email, password, name, accountType, vin, plate, bikeType}) => {
//     if (email == '' || password == '' || name == '' || accountType == '') {
//     return { type: LOGIN_BLANK_ERROR, payload: {error: 'All fileds are required.'} };
// } 

//     return (dispatch) => {

//         dispatch({ type: LOGIN_USER });
//         fetch('https://memotor-dev.herokuapp.com/user', {
//             method: 'POST',
//             headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ 'email': email, 'password': password , name: name, account_type: accountType, vin_number: vin, plate_number: plate, bike_type: bikeType })
//         })
//         .then((response) => response.json())
//         .then(response => registerUserSuccess(dispatch, response));
//     };
// };

// below here are helper methods that are not exported.
// const registerUserSuccess = (dispatch, response) => {
//     if (!response.id) {
//     dispatch({ type: REGISTER_USER_FAIL });
// }

//     if (response.id) {
//         dispatch({
//         type: REGISTER_USER_SUCCESS,
//         payload: { user: response }});
//         Keyboard.dismiss();
//         Actions.login();
//     }

// };

// export const resetPW = ({ password, code }) => {
// if (code == '' || password == '') {
// return { type: LOGIN_BLANK_ERROR, payload: {error: 'code or password is blank.'} };
// }
// return (dispatch) => {
// // we dispatch this to set the loading spinner
// dispatch({ type: LOGIN_USER });

// fetch('https://memotor-dev.herokuapp.com/set_pass', {
//  method: 'POST',
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json',
//  },
//  body: JSON.stringify({ 'token': code, 'password': password })
// })
// .then((response) => response.json())
// .then(response => resetPWSuccess(dispatch, response));
// };
// };

// const resetPWSuccess = (dispatch, response) => {
//     if (response.errors) {
//         dispatch({
//         type: REQUEST_PW_SUCCESS,
//         payload: { loading: false, requestSuccess: false}});
//         } else {
//         dispatch({
//         type: REQUEST_PW_SUCCESS,
//         payload: { loading: false, requestSuccess: true}});
//         Actions.login();
//     }
// };

// export const requestPWToken = ({ email }) => {
//     if (email == '') {
//      return { type: LOGIN_BLANK_ERROR, payload: {error: 'email or password is blank.'} };
//     }
//         return (dispatch) => {
//     // we dispatch this to set the loading spinner
//         dispatch({ type: LOGIN_USER });

//     fetch('https://memotor-dev.herokuapp.com/reset_password', {
//      method: 'POST',
//      headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//      },
//         body: JSON.stringify({ 'email': email })
//     })
//     .then((response) => response.json())
//     .then(response => requestPWSuccess(dispatch, response));
//     };
//  };

// const requestPWSuccess = (dispatch, response) => {
//     if (response.errors) {
//     dispatch({
//     type: REQUEST_PW_SUCCESS,
//     payload: { loading: false, requestSuccess: false}});
//     } else {
//     dispatch({
//     type: REQUEST_PW_SUCCESS,
//     payload: { loading: false, requestSuccess: true}});
//     Keyboard.dismiss();
//     }
// };

