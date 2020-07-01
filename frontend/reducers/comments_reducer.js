import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const _nullSession = {};

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.commentId]
      return nextState;
    case RECEIVE_ALL_POSTS:
      return {...nextState, ...action.comments};
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default UsersReducer;