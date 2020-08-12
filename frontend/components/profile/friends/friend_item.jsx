import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const FriendItem = ({ friend }) => {
  return (
    <li className="friend-item">
      <Link to="profile-picture-container"
        className="profile-picture-container"
      >
        <div className="profile-picture">Img</div>
      </Link>

      <div className="details-container">
        <div className="details">
          <Link to={`/u/${friend.username}`}
            className="name"
            >
            {`${friend.fname} ${friend.lname}`}
          </Link>

          <Link to={`/u/${friend.username}/friends`}
            className="friend-count"
            >
            {`${friend.friends_arr.length} friends`}
          </Link>
        </div>

        <div className="friendship-status">Friends</div>
      </div>
    </li>
  );
};

export default withRouter(FriendItem);