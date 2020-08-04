import React from 'react';
import { Link } from 'react-router-dom';
import LogoutMenu from './logout_menu';
import SocialButtons from './social_buttons/social_buttons';

const RightSide = ({ currentUser, logout }) => {
  return (
    <div className="right">
      <div className="navigation-button container">
        <div className="navigation-button profile">
          <Link
            to={`/${currentUser.username}`}
            className="navigation-button button front-divider back-divider"
          >
            {currentUser.fname}
          </Link>
        </div>
        <div className="navigation-button home">
          <Link to="/" className="navigation-button button back-divider">
            Home
          </Link>
        </div>
      </div>
      <SocialButtons />
      <LogoutMenu logout={logout} />
    </div>
  );
};

export default RightSide;