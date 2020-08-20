import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import CreatePostModal from './create_post_modal';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    board: 
      state.entities.users[ownProps.match.params.username] || state.session,
    setBody: ownProps.setBody,
    setFile: ownProps.setFile
  });
}

const mDTP = (dispatch) => {
  return ({
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  });
}

export default withRouter(connect(mSTP, mDTP)(CreatePostModal));