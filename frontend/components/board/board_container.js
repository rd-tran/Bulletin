import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import Board from './board';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state) => {
  return ({
    users: state.entities.users,
    currentUser: state.session,
    posts: Object.values(state.entities.posts)
  });
}

const mDTP = (dispatch) => {
  return ({
    fetchUsers: (username) => dispatch(fetchUsers(username)),
    fetchPosts: (username, type) => dispatch(fetchPosts(username, type))
  });
}

export default connect(mSTP, mDTP)(Board);