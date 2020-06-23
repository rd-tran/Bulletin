import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const fetchUsers = () => (dispatch) => {
  return (
    UserApiUtil.fetchUsers()
      .then( users => dispatch(receiveAllUsers(users)) )
  );
};

export const fetchUser = (userId) => (dispatch) => {
  return (
    UserApiUtil.fetchUser(userId)
      .then( user => dispatch(receiveCurrentUser(user)))
  );
};

export const updateUser = (user) => (dispatch) => {
  return (
    UserApiUtil.updateUser(user)
      .then( user => dispatch(receiveCurrentUser(user)))
  );
};
