import React from 'react';
import { Link } from 'react-router-dom';
import LogoutMenu from '../session/logout_menu';

const RightSide = ({ logout }) => {
  return (
    <div className="right">
      <Link to="/">Home</Link>
      <LogoutMenu logout={logout} />
    </div>
  );
};

export default RightSide;