import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  return ({
    user: state.entities.users[ownProps.match.params.username],
    username: ownProps.match.params.username
  });
};

const mDTP = (dispatch) => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default withRouter(connect(mSTP, mDTP)(Profile));