import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import EditPostModal from './edit_post_modal';

const mSTP = (state, ownProps) => {
  return ({
    post: ownProps.post
  });
}

const mDTP = (dispatch) => {
  return ({
    updatePost: (post) => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal())
  });
}

export default connect(mSTP, mDTP)(EditPostModal);