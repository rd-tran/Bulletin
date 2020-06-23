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
      <div id="signup-container">
        <h1>Log In</h1>
        <h2>It's quick and easy.</h2>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange('email')}
          />

          <input
            type="password"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange('password')}
          />
          
          <button>Log In</button>
        </form>
      </div>
    );
  }
};