import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import CreatePostModal from './create_post_modal';

const mSTP = (state) => {
  return ({
    user: state.session
  });
}

const mDTP = (dispatch) => {
  return ({
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  });
}

export default connect(mSTP, mDTP)(CreatePostModal);