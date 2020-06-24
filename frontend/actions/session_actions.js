import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS'
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then( user => {
      return dispatch(logoutCurrentUser(user));
    })
    .fail( response => {
      const errors = response.responseJSON;
      return dispatch(receiveSignupErrors(errors));
    })
);

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then( user => {
      return dispatch(receiveCurrentUser(user));
    })
    .fail( response => {
      const errors = response.responseJSON;
      return dispatch(receiveLoginErrors(errors));
    })
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then( () => dispatch(logoutCurrentUser()) )
);