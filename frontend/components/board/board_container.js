import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import Board from './board';

const mSTP = (state) => {
  return ({
    currentUser: state.session,
    posts: Object.values(state.entities.posts)
  });
}

const mDTP = (dispatch) => {
  return ({
    fetchPosts: (username, type) => dispatch(fetchPosts(username, type))
  });
}

export default connect(mSTP, mDTP)(Board);