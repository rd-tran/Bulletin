import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import Board from './board';

const mSTP = (state) => {
  return ({
    currentUser: state.session,
    users: state.entities.users,
    posts: Object.values(state.entities.posts).reverse(),
    comments: Object.values(state.entities.comments)
  });
};

const mDTP = (dispatch) => {
  return ({
    fetchPosts: (username) => dispatch(fetchPosts(username, 'board')),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mSTP, mDTP)(Board);