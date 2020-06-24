import { connect } from 'react-redux';
import { withRouter } from "react-router";
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mDTP = (dispatch, ownProps) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default withRouter(connect(mSTP, mDTP)(NavBar));