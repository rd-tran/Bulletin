import React from 'react';
import { Link } from 'react-router-dom';
import FbLogoIcon from './fb_logo_icon';
import SearchBar from './searchbar';

const LeftSide = () => {
  return (
    <div className="left">
      <Link to="/" className="fb-logo-icon container">
        <FbLogoIcon />
      </Link>

      <SearchBar />
    </div>
  );
};

export default LeftSide;