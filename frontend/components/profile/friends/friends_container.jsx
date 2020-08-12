import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import FriendItem from './friend_item';

const FriendsContainer = ({ match }) => {
  const currentUser = useSelector((state) => state.session);
  const user = useSelector((state) => {
    return state.entities.users[match.params.username];
  });
  const friends = user.friends_arr.map((friend_username) => (
    useSelector((state) => state.entities.users[friend_username])
  ));

  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];
  let friendItems, seeAllButton;
  if (lastPathPart !== 'friends' && friends.length > 8) {
    friendItems = friends.slice(0, 8).map((friend, idx) => 
      <FriendItem key={idx} friend={friend}/>
    );

    seeAllButton =  <Link to={`/u/${match.params.username}/friends`}
                      className="see-all"
                    >
                      See All
                    </Link>
  } else {
    friendItems = friends.map((friend, idx) => 
      <FriendItem key={idx} friend={friend}/>
    );
  }
  
  return (
    <div id="friends-container" className="profile-info">
      <div className="header-container">
        <i className="friends-icon"></i>
        <Link to={`/u/${match.params.username}/friends`}>
          Friends
        </Link>
      </div>

      <ul className="friend-index">
        {friendItems}
      </ul>

      {seeAllButton}
    </div>
  );
};

export default withRouter(FriendsContainer);