import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions'
import Home from './home';

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

export default connect(mSTP, mDTP)(Home);