import {
  RECEIVE_ALL_USERS,
  RECEIVE_CURRENT_USER
} from '../actions/user_actions'

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return state;
  }
}

export default UsersReducer;