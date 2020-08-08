import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProfileNavContainer = ({ match }) => {
  
  return (
    <div className="profile-nav-container">
      <ul className='profile-nav'>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/timeline`}>Timeline</Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/about`}>About</Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/friends`}>Friends</Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/photos`}>Photos</Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(ProfileNavContainer);