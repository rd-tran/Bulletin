import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';
import Comments from './comments';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    comments: ownProps.comments
  });
}

const mDTP = (dispatch) => {
  return ({
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  });
}

export default connect(mSTP, mDTP)(Comments);