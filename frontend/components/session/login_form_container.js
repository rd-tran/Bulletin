import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { removeErrors } from '../../actions/remove_error_actions';
import LoginForm from './login_form';

const mSTP = (state) => ({
  user: {
    email: '',
    password: '',
  },
  errors: state.errors.login
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(LoginForm);