import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FriendIndex from './friend_index';

const FriendsContainer = ({ match }) => {
  return (
    <div id="friends-container" className="profile-info">
      <div className="header-container">
        <i className="friends-icon"></i>
        <Link to={`/u/${match.params.username}/friends`}>
          Friends
        </Link>
      </div>

      <FriendIndex/>
    </div>
  );
};

export default withRouter(FriendsContainer);