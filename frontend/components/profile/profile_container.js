import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    user: state.entities.users[ownProps.match.params.username],
    users: state.entities.users,
    posts: Object.values(state.entities.posts).reverse(),
    comments: Object.values(state.entities.comments)
  });
};

const mDTP = (dispatch) => {
  return ({
    fetchUsers: (username) => dispatch(fetchUsers(username)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (username) => dispatch(fetchPosts(username, 'board')),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default withRouter(connect(mSTP, mDTP)(Profile));