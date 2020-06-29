import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PostReducer from './post_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  posts: PostReducer
});

export default RootReducer;