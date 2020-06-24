import { combineReducers } from 'redux';
import SignupErrorsReducer from './signup_errors_reducer';
import LoginErrorsReducer from './login_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';

const ErrorsReducer = combineReducers({
  signup: SignupErrorsReducer,
  login: LoginErrorsReducer,
  user: UserErrorsReducer
});

export default ErrorsReducer;