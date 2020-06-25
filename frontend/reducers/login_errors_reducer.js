import {
  RECEIVE_CURRENT_USER,
  RECEIVE_LOGIN_ERRORS
} from '../actions/session_actions';
import { REMOVE_ERRORS } from '../actions/remove_error_actions';

const _nullErrors = {};

const LoginErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_LOGIN_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return _nullErrors
    default:
      return state;
  }  
};

export default LoginErrorsReducer;