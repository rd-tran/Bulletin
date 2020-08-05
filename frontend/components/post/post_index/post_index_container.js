import { connect } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';
import { openModal } from '../../../actions/modal_actions';
import PostIndex from './post_index';

const mSTP = (state) => {
  return ({
    currentUser: state.session,
    users: state.entities.users,
    posts: Object.values(state.entities.posts).reverse(),
    comments: Object.values(state.entities.comments)
  });
};

const mDTP = (dispatch, ownProps) => {
  return ({
    fetchPosts: ownProps.fetchPosts,
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mSTP, mDTP)(PostIndex);