import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProfileNavContainer = ({ match, location }) => {
  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];
  console.log(lastPathPart)
  const timelineActive = lastPathPart === 'timeline' ? 'active' : '';
  const aboutActive = lastPathPart === 'about' ? 'active' : '';
  const friendsActive = lastPathPart === 'friends' ? 'active' : '';
  const photosActive = lastPathPart === 'photos' ? 'active' : '';
  
  return (
    <div className="profile-nav-container">
      <ul className='profile-nav'>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/timeline`}
            className={timelineActive}
          >
            Timeline
            <div className={`active-icon ${timelineActive}`}></div>
          </Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/about`}
            className={aboutActive}
          >
            About
            <div className={`active-icon ${aboutActive}`}></div>
          </Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/friends`}
            className={friendsActive}
          >
            Friends
            <div className={`active-icon ${friendsActive}`}></div>
          </Link>
        </li>
        <li className="profile-nav-button">
          <Link to={`/u/${match.params.username}/photos`}
            className={photosActive}
          >
            Photos
            <div className={`active-icon ${photosActive}`}></div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(ProfileNavContainer);