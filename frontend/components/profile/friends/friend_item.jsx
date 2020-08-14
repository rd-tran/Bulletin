import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const FriendItem = ({ friend }) => {
  const currentUser = useSelector((state) => state.session);
  let friendshipStatus;
  if (currentUser.friends_arr.includes(friend.username)) {
    friendshipStatus = <div className="friendship-status friends">
                         Friends
                       </div>;
  } else if (currentUser.username !== friend.username) {
    friendshipStatus = <div className="friendship-status not-friends">
                         Add Friend
                       </div>;
  }
  
  return (
    <li className="friend-item">
      <Link to={`/u/${friend.username}`}
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

        {friendshipStatus}
      </div>
    </li>
  );
};

export default withRouter(FriendItem);