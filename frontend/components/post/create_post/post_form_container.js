import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import Postform from './post_form';

const mSTP = (state, ownProps) => {
  return ({
    user: state.entities.users[ownProps.match.params.username] ||
      state.session,
    posts: Object.values(state.entities.posts),
    body: ownProps.body
  });
}

const mDTP = (dispatch) => {
  return ({
    createPost: (post) => dispatch(createPost(post)),
    openModal: (modal) => dispatch(openModal(modal))
  });
}

export default withRouter(connect(mSTP, mDTP)(Postform));