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
      fnameErrorBorder: false,
      lnameErrorBorder: false,
      emailErrorBorder: false,
      passwordErrorBorder: false,
      genderErrorBorder: false,
      fnameErrorIcon: false,
      lnameErrorIcon: false,
      emailErrorIcon: false,
      passwordErrorIcon: false,
      genderErrorIcon: false
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
          updateErrorState[`${key}ErrorBorder`] = true;
          updateErrorState[`${key}ErrorIcon`] = true;
        }

        this.setState(updateErrorState);
      });
  }

  handleFocus(e) {
    const type = e.target.classList[1];
    if (this.props.errors[type] || !e.target.type == 'radio') {
      const typeErrorBorder = `${type}ErrorBorder`;
      const typeErrorIcon = `${type}ErrorIcon`;
      $(`.signup.errors.${type}`).removeClass('active')
      this.setState({
        [typeErrorBorder]: false,
        [typeErrorIcon]: false
      });
    }
  }

  handleBlur(e) {
    const type = e.target.classList[1];
    if (this.props.errors[type] && 
      (!e.target.value.length )) {
      const typeErrorBorder = `${type}ErrorBorder`;
      const typeErrorIcon = `${type}ErrorIcon`;
      $(`.signup.errors.${type}`).removeClass('active')
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
    $(`input.signup.${type}`).focus();
    $(`.signup.errors.${type}`).addClass('active')
    this.setState({ 
      [typeErrorBorder]: false,
      [typeErrorIcon]: false
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
      fnameErrorBorder,
      lnameErrorBorder,
      emailErrorBorder,
      passwordErrorBorder,
      genderErrorBorder,
      fnameErrorIcon,
      lnameErrorIcon,
      emailErrorIcon,
      passwordErrorIcon,
      genderErrorIcon
    } = this.state;
    const { errors } = this.props;

    const showFnameErrorBorder = fnameErrorBorder ? 'error-border' : '';
    const showLnameErrorBorder = lnameErrorBorder ? 'error-border' : '';
    const showEmailErrorBorder = emailErrorBorder ? 'error-border' : '';
    const showPasswordErrorBorder = passwordErrorBorder ? 'error-border' : '';
    const showGenderErrorBorder = genderErrorBorder ? 'error-border' : '';
    
    const showFnameErrorIcon = fnameErrorIcon ? 'active' : '';
    const showLnameErrorIcon = lnameErrorIcon ? 'active' : '';
    const showEmailErrorIcon = emailErrorIcon ? 'active' : '';
    const showPasswordErrorIcon = passwordErrorIcon ? 'active' : '';
    const showGenderErrorIcon = genderErrorIcon ? 'active' : '';

    const form = (
      <form id="signup-form">
        <div id="signup-name" className="credentials">
          <div id="signup-fname">
            <div id="signup-fname-errors"
              className="signup errors fname">
              { errors.fname }
            </div>
            <input
              className={`signup fname ${showFnameErrorBorder}`}
              type="text"
              value={this.state.fname}
              placeholder="First name"
              onChange={this.handleChange('fname')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <ErrorIcon
              formType="signup"
              inputType="fname"
              active={showFnameErrorIcon}
              showError={this.showError}
            />
          </div>

          <div id="signup-lname">
            <div id="signup-lname-errors"
              className="signup errors lname">
              { errors.lname }
            </div>
            <input
              className={`signup lname ${showLnameErrorBorder}`}
              type="text"
              value={this.state.lname}
              placeholder="Last name"
              onChange={this.handleChange('lname')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <ErrorIcon
              formType="signup"
              inputType="lname"
              active={showLnameErrorIcon}
              showError={this.showError}
            />
          </div>
        </div>
        
        <div id="signup-email-container" className="credentials">
          <div id="signup-email">
            <input
              className={`signup email ${showEmailErrorBorder}`}
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange('email')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <div id="signup-email-errors" className="signup errors email">
              { errors.email }
            </div>
            <ErrorIcon
              formType="signup"
              inputType="email"
              active={showEmailErrorIcon}
              showError={this.showError}
            />
          </div>
        </div>

        <div id="signup-password" className="credentials">
          <input
            className={`signup password ${showPasswordErrorBorder}`}
            type="text"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange('password')}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <div id="signup-password-errors" className="signup errors password">
            { errors.password }
          </div>
          <ErrorIcon
            formType="signup"
            inputType="password"
            active={showPasswordErrorIcon}
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
          <div id="signup-gender-errors" className="signup errors gender">
            { errors.gender }
          </div>
          <span className={`gender ${showGenderErrorBorder}`}>
            <input
              id="gender-female"
              className='signup gender'
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange('gender')}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <label htmlFor="gender-female">Female</label>
          </span>

          <span className={`gender ${showGenderErrorBorder}`}>
            <input
              id="gender-male"
              className='signup gender'
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
            formType="signup"
            inputType="gender"
            active={showGenderErrorIcon}
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