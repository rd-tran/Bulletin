import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import Logout from '../session/logout';
import LogoutContainer from '../session/logout_container';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div id="navbar-container" className="logged-out">
        <button className="left">Logo</button>
        <div className="right">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Logout logout={logout} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <LoginFormContainer />
  );
};

export default NavBar;