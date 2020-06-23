import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(SignupForm);