import {
  LOGIN_CURRENT_USER,
  RECEIVE_SIGNUP_ERRORS,
} from '../actions/session_actions';
import { REMOVE_ERRORS } from '../actions/remove_error_actions';

const _nullErrors = {};

const SignupErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {
    case LOGIN_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return _nullErrors
    default:
      return state;
  }
};

export default SignupErrorsReducer;
