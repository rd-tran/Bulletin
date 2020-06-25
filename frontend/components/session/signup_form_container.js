import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { demoLogin } from '../../actions/session_actions';
import { removeErrors } from '../../actions/remove_error_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
  errors: state.errors.signup
});

const mDTP = (dispatch) => ({
  demoLogin: () => {
    dispatch(demoLogin())
  },
  signup: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors)
});

export default connect(mSTP, mDTP)(SignupForm);