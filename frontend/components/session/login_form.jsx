import React from 'react';

export default class LoginForm extends React.Component {
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
    this.props.login(this.state);
  }
  
  render() {
    return (
      <div id="login-form-container">
        <form id="login-form" onSubmit={this.handleSubmit}>
          <div className="input">
            <h2>Email</h2>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </div>

          <div className="input">
            <h2>Password</h2>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </div>
          
          <button>Log In</button>
        </form>
      </div>
    );
  }
};