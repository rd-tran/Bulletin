import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import LogoutContainer from '../session/logout_container';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div id="navbar-container logged-out">
        <button>Logo</button>
        <Link to="/">Home</Link>
        <LogoutContainer />
      </div>
    );
  }

  return (
    <LoginFormContainer />
  );
};

export default NavBar;