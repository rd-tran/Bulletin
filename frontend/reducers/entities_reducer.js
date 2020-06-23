import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  users: UsersReducer
});

export default RootReducer;