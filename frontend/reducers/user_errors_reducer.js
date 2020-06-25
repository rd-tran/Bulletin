import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';
import { REMOVE_ERRORS } from '../actions/remove_error_actions';

const _nullErrors = {};

const UserErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return _nullErrors
    default:
      return state;
  }
}

export default UserErrorsReducer;