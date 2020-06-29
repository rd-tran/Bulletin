import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUsers = (username) => (dispatch) => {
  return (
    UserApiUtil.fetchUsers(username)
      .then( users => {
        dispatch(receiveAllUsers(users))
      })
  );
};

export const fetchUser = (userId) => (dispatch) => {
  return (
    UserApiUtil.fetchUser(userId)
      .then( user => dispatch(receiveUser(user)))
  );
};

export const updateUser = (user) => (dispatch) => {
  return (
    UserApiUtil.updateUser(user)
      .then( user => dispatch(receiveUser(user)))
      .fail( response => {
        const errors = response.responseJSON;
        return dispatch(receiveUserErrors(errors));
      })
  );
};
