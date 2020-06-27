import React from 'react';
import ErrorIcon from './error_icon';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErrorBorder: false,
      passwordErrorBorder: false,
      emailErrorIcon: false,
      passwordErrorIcon: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.showError = this.showError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
    
    const user = ( ({email, password}) => ({email, password}) )(this.state);

    this.props.login(user)
      .fail( () => {
        const updateErrorState = {};

        for (let key in this.props.errors) {
          updateErrorState[`${key}ErrorBorder`] = true;
          updateErrorState[`${key}ErrorIcon`] = true;
        }

        this.setState(updateErrorState);
      });
  }

  handleFocus(e) {
    const type = e.target.classList[1];

    if (this.props.errors[type] && !e.target.value.length) {
      const typeErrorBorder = `${type}ErrorBorder`;
      const typeErrorIcon = `${type}ErrorIcon`;
      $(`.login.errors.${type}`).addClass('active')
      this.setState({
        [typeErrorBorder]: false,
        [typeErrorIcon]: false
      });
    }
  }

  handleBlur(e) {
    const type = e.target.classList[1];
    const typeErrorBorder = `${type}ErrorBorder`;
    const typeErrorIcon = `${type}ErrorIcon`;
    
    $(`.login.errors.${type}`).removeClass('active')

    if (this.props.errors[type] && !e.target.value.length) {
      this.setState({
        [typeErrorBorder]: true,
        [typeErrorIcon]: true
      });
    }
  }

  showError(e) {
    const type = e.target.classList[1];
    const typeErrorBorder = `${type}ErrorBorder`;
    const typeErrorIcon = `${type}ErrorIcon`;
    $(`input.login.${type}`).focus();
    $(`.login.errors.${type}`).addClass('active')
    this.setState({ 
      [typeErrorBorder]: false,
      [typeErrorIcon]: false
    });
  }
  
  render() {
    const { errors } = this.props;
    let { email,
      password,
      emailErrorBorder,
      passwordErrorBorder,
      emailErrorIcon,
      passwordErrorIcon
    } = this.state;

    if (!Object.values(errors).length) {
      [
        emailErrorBorder,
        passwordErrorBorder,
        emailErrorIcon,
        passwordErrorIcon
      ] = ['', '', '', ''];
    }

    const showEmailErrorBorder = emailErrorBorder ? 'error-border' : '';
    const showPasswordErrorBorder = passwordErrorBorder ? 'error-border' : '';
    const showEmailErrorIcon = emailErrorIcon ? 'active' : '';
    const showPasswordErrorIcon = passwordErrorIcon ? 'active' : '';

    const navbarForm = (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label>Email
            <input
              className={`login email ${showEmailErrorBorder}`}
              type="text"
              value={email}
              onChange={this.handleChange('email')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </label>
          <div className="login errors email">
            { errors.email }
          </div>
          <ErrorIcon
            formType="login"
            inputType="email"
            active={showEmailErrorIcon}
            showError={this.showError}
          />
        </div>

        <div className="input-container">
          <label>Password
            <input
              className={`login password ${showPasswordErrorBorder}`}
              type="password"
              value={password}
              onChange={this.handleChange('password')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </label>
          <div className="login errors password">
            { errors.password }
          </div>
          <ErrorIcon
            formType="login"
            inputType="password"
            active={showPasswordErrorIcon}
            showError={this.showError}
          />
        </div>
        <div className="login-button">
          <button>Log In</button>
        </div>
      </form>
    );

    return (
      <div id="login-form-container">
        { navbarForm }
      </div>
    );
  }
};