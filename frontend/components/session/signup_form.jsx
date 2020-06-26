import React from 'react';
import {
  daySelector,
  monthSelector,
  yearSelector
} from '../../util/date_selector';
import ErrorIcon from './error_icon';


export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    const initialDate = new Date();

    const initialMonth = () => {
      const textMonth = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      const numMonth = initialDate.getMonth();
      return textMonth[numMonth];
    };
    const initialDay = initialDate.getDate();
    const initialYear = initialDate.getFullYear();

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      month: initialMonth(),
      day: initialDay,
      year: initialYear,
      gender: '',
      fnameError: false,
      lnameError: false,
      emailError: false,
      passwordError: false,
      genderError: false,
      showfnameError: false,
      showlnameError: false,
      showemailError: false,
      showpasswordError: false,
      showgenderError: false
    };
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.showError = this.showError.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
    
    const user = ( ({fname, lname, email, password, gender}) => (
      {fname, lname, email, password, gender}
    ))(this.state);
    const { month, day, year } = this.state;
    const birthday = month + ' ' + day + ', ' + year;
    user.birthday = birthday;

    this.props.signup(user)
      .fail( () => {
        const updateErrorState = {};

        for (let key in this.props.errors) {
          updateErrorState[`${key}Error`] = true;
          updateErrorState[`show${key}Error`] = true;
        }

        this.setState(updateErrorState);
      });
  }

  handleFocus(e) {
    const type = e.target.classList[0];
    if (this.props.errors[type] || e.target.type == 'radio') {
      const typeError = `${e.target.classList[0]}Error`;
      const showTypeError = `show${type}Error`;
      $(`.errors.${type}`).removeClass('active')
      this.setState({
        [typeError]: false,
        [showTypeError]: false
      });
    }
  }

  handleBlur(e) {
    const type = e.target.classList[0];
    if (this.props.errors[type] && 
      (!e.target.value.length || e.target.type === 'radio')) {
      const typeError = `${e.target.classList[0]}Error`;
      const showTypeError = `show${type}Error`;
      $(`.errors.${type}`).removeClass('active')
      this.setState({
        [typeError]: true,
        [showTypeError]: true
      });
    }
  }

  showError(e) {
    const type = e.target.classList[0];
    const typeError = `${type}Error`;
    const showTypeError = `show${type}Error`;
    $(`input[class*='${type}']`).focus();
    $(`.errors.${type}`).addClass('active')
    this.setState({ 
      [typeError]: true,
      [showTypeError]: true
    });
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.removeErrors();
    this.props.demoLogin();
  }
  
  render() {
    const {
      month,
      day,
      year,
      fnameError,
      lnameError,
      emailError,
      passwordError,
      genderError,
      showfnameError,
      showlnameError,
      showemailError,
      showpasswordError,
      showgenderError
    } = this.state;
    const { errors } = this.props;

    const fnameErrorBorder = fnameError ? 'error-border' : '';
    const lnameErrorBorder = lnameError ? 'error-border' : '';
    const emailErrorBorder = emailError ? 'error-border' : '';
    const passwordErrorBorder = passwordError ? 'error-border' : '';
    const genderErrorBorder = genderError ? 'error-border' : '';
    
    const renderFnameError = showfnameError ? 'active' : '';
    const renderLnameError = showlnameError ? 'active' : '';
    const renderEmailError = showemailError ? 'active' : '';
    const renderPasswordError = showpasswordError ? 'active' : '';
    const renderGenderError = showgenderError ? 'active' : '';

    const form = (
      <form id="signup-form">
        <div id="signup-name" className="credentials">
          <div id="signup-fname">
            <div id="signup-fname-errors"
              className="errors fname">
              { errors.fname }
            </div>
            <input
              className={`fname ${fnameErrorBorder}`}
              type="text"
              value={this.state.fname}
              placeholder="First name"
              onChange={this.handleChange('fname')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <ErrorIcon
              type="fname"
              active={renderFnameError}
              showError={this.showError}
            />
          </div>

          <div id="signup-lname">
            <div id="signup-lname-errors"
              className="errors lname">
              { errors.lname }
            </div>
            <input
              className={`lname ${lnameErrorBorder}`}
              type="text"
              value={this.state.lname}
              placeholder="Last name"
              onChange={this.handleChange('lname')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <ErrorIcon
              type="lname"
              active={renderLnameError}
              showError={this.showError}
            />
          </div>
        </div>
        
        <div id="signup-email-container" className="credentials">
          <div id="signup-email">
            <input
              className={`email ${emailErrorBorder}`}
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange('email')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <div id="signup-email-errors" className="errors email">
              { errors.email }
            </div>
            <ErrorIcon
              type="email"
              active={renderEmailError}
              showError={this.showError}
            />
          </div>
        </div>

        <div id="signup-password" className="credentials">
          <input
            className={`password ${passwordErrorBorder}`}
            type="text"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange('password')}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <div id="signup-password-errors" className="errors password">
            { errors.password }
          </div>
          <ErrorIcon
            type="password"
            active={renderPasswordError}
            showError={this.showError}
          />
        </div>
        
        <div id="signup-birthday">
          <div className="label">Birthday</div>
          <div id="birthday-selectors">
            {
              monthSelector(
                month,
                this.handleChange('month')
                )
              }
            {
              daySelector(
                day,
                this.handleChange('day')
                )
              }
            {
              yearSelector(
                year,
                this.handleChange('year')
                )
              }
          </div>
        </div>
          
        <div id="signup-gender">
          <div className="label">Gender</div>
          <div id="signup-gender-errors" className="errors gender">
            { errors.gender }
          </div>
          <span className={`gender ${genderErrorBorder}`}>
            <input
              id="gender-female"
              className='gender'
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange('gender')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <label htmlFor="gender-female">Female</label>
          </span>

          <span className={`gender ${genderErrorBorder}`}>
            <input
              id="gender-male"
              className='gender'
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange('gender')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <label htmlFor="gender-male">Male</label>
          </span>

          <ErrorIcon
            type="gender"
            active={renderGenderError}
            showError={this.showError}
          />
        </div>
        
        <div className="terms">
          <p>By clicking Sign Up, you agree to test out my project. Please note that you don't need to enter a valid email. You may use the Demo Login if you don't want to enter any credentials.</p>
        </div>

        <div id="signup-buttons">
          <button
            id="signup-button"
            className="button"
            onClick={this.handleSubmit}
          >Sign Up</button>

          <button
            id="demo-button"
            className="button"
            onClick={this.demoLogin}
          >Demo</button>
        </div>
      </form>
    );

    return (
      <div id="logged-out-main">
        <div id="logged-out-info">
          <h2 className="logged-out-info-header">
            Connect with friends and the world around you on Bulletin.</h2>

          <div className="logged-out-info-row-container">
            <div className="logged-out-info-icon news"></div>
            <span className="logged-out-info-row">
              <span className="logged-out-info-row-header">See photos and updates</span>
              <> from friends in News Feed.</>
            </span>
          </div>

          <div className="logged-out-info-row-container">
          <div className="logged-out-info-icon board"></div>
            <span className="logged-out-info-row">
              <span className="logged-out-info-row-header">Share what's new</span>
              <> in your life on your Bulletin Board.</>
            </span>
          </div>

          <div className="logged-out-info-row-container">
            <div className="logged-out-info-icon search"></div>
            <span className="logged-out-info-row">
              <span className="logged-out-info-row-header">Find more</span>
              <> of what you're looking for with Bulletin Search.</>
            </span>
          </div>
        </div>

        <div id="signup-form-container">
          <div id="signup">
            <h2>Sign Up</h2>
            <div>It's quick and easy.</div>
          </div>
          { form }
          <div className="break-line"></div>
        </div>
      </div>
    );
  }
};