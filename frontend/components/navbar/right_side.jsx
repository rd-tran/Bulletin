import React from 'react';
import { Link } from 'react-router-dom';
import LogoutMenu from './logout_menu';
import SocialButtons from './social_buttons/social_buttons';

const RightSide = ({ logout }) => {
  return (
    <div className="right">
      <div className="navigation-button container">
        <Link to="/" className="navigation-button button divider">Home</Link>
      </div>
      <SocialButtons />
      <LogoutMenu logout={logout} />
    </div>
  );
};

export default RightSide;