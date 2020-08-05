import {
  RECEIVE_ALL_USERS,
  RECEIVE_CURRENT_USER
} from '../actions/user_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const _nullSession = {};

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      nextState[action.user.username] = action.user;
      return nextState;
    case RECEIVE_ALL_POSTS:
      if (action.username) {
        delete action.users[action.username];
      }
      return {...nextState, ...action.users};
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default UsersReducer;