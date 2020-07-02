import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions'
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Home from './home';

const mSTP = (state) => {
  return ({
    users: state.entities.users,
    currentUser: state.session,
    posts: Object.values(state.entities.posts).reverse(),
    comments: Object.values(state.entities.comments)
  });
}

const mDTP = (dispatch) => {
  return ({
    fetchUsers: (username) => dispatch(fetchUsers(username)),
    fetchPosts: (username, type) => dispatch(fetchPosts(username, type)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (modal) => dispatch(openModal(modal))
  });
}

export default connect(mSTP, mDTP)(Home);