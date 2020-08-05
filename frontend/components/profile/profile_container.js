import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    user: state.entities.users[ownProps.match.params.username]
  });
};

const mDTP = (dispatch) => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default withRouter(connect(mSTP, mDTP)(Profile));