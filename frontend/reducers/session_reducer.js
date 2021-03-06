import {
  LOGIN_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

const _nullSession = {};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOGIN_CURRENT_USER:
      return action.user;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default SessionReducer;