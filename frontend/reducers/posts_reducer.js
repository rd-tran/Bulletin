import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from "../actions/post_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {};

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts ? action.posts : state;
    case RECEIVE_POST:
      nextState[action.post.id] = action.post;
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }  
};

export default PostsReducer;