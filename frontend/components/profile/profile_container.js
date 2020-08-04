import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    user: state.entities.users[ownProps.match.params.username]
  });
};

const mDTP = (dispatch, ownProps) => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default withRouter(connect(mSTP, mDTP)(Profile));