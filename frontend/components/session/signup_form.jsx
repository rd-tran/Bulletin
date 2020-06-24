import React from 'react';
import {
  daySelector,
  monthSelector,
  yearSelector
} from '../../util/date_selector';


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
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.props.signup(user);
  }
  
  render() {
    const { month, day, year } = this.state;

    const form = (
      <form id="signup-form">
        <div id="signup-credentials">
          <div id="signup-name">
            <input
              type="text"
              value={this.state.fname}
              placeholder="First name"
              onChange={this.handleChange('fname')}
            />

            <input
              type="text"
              value={this.state.lname}
              placeholder="Last name"
              onChange={this.handleChange('lname')}
            />
          </div>

          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange('email')}
          />

          <input
            type="text"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange('password')}
          />
        </div>
        
        <div id="signup-other">
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
            <div id="signup-gender">
              <span>
                <input
                  id="gender-female"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={this.handleChange('gender')}
                />
                <label htmlFor="gender-female">Female</label>
              </span>

              <span>
                <input
                  id="gender-male"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleChange('gender')}
                />
                <label htmlFor="gender-male">Male</label>
              </span>
            </div>
          </div>
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

    const errors = (
      <ul id="signup-errors">
        { this.props.errors.map( (error, idx) => {
            return (
              <li key={idx}>{error}</li>
            );
          })
        }
      </ul>
    );

    return (
      <div id="logged-out-main">
        <div id="signup-form-container">
          <div id="signup">
            <h2>Sign Up</h2>
            <div>It's quick and easy.</div>
          </div>
          { form }
          { errors }
        </div>
      </div>
    );
  }
};