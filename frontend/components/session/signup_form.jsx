import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }
  
  render() {
    return (
      <div id="signup-form-container">
        <div id="signup">
          <h2>Sign Up</h2>
          <div>It's quick and easy.</div>
        </div>
        <form id="signup-form" onSubmit={this.handleSubmit}>
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
            <label>Birthday
              <input
                type="date"
                value={this.state.birthday}
                onChange={this.handleChange('birthday')}
                />
            </label>

            <label>Gender
              <label>
                <input
                  type="radio"
                  value="Female"
                  onChange={this.handleChange('Gender')}
                />
              </label>

              <label>
                <input
                  type="radio"
                  value="Male"
                  onChange={this.handleChange('Gender')}
                />
              </label>
            </label>
          </div>
          
          <button id="signup-button">Sign Up</button>
        </form>
      </div>
    );
  }
};