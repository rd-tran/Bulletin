import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import LogoutMenu from '../session/logout_menu';
import LogoutContainer from '../session/logout_container';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    const { history, currentUser, logout } = this.props;

    if (currentUser) {
      return (
        <div id="navbar-container" className="logged-in">
          <div className="navbar logged-in">
            <div className="left">
              <div className="fb-logo-icon navbar-icon" onClick={() => history.push("/")}>
              </div>
              <input
                className="search"
                type="text"
              />
            </div>

            <div className="right">
              <Link to="/">Home</Link>
              <LogoutMenu logout={logout} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="navbar-container" className="logged-out">
        <div className="navbar logged-out">
          <a href="/">
            <h1 className="text-logo">bulletin</h1>
          </a>
          <LoginFormContainer />
        </div>
      </div>
    );
  }
};
