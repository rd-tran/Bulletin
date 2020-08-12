import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FriendItem from './friend_item';

const FriendIndex = ({ match, location }) => {
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
  if (lastPathPart != 'friends') {
    if (friends.length > 8) {
      friendItems = friends.slice(0, 8).map((friend, idx) => 
        <FriendItem key={idx} friend={friend}/>
      );
    } else {
      friendItems = friends.map((friend, idx) => 
        <FriendItem key={idx} friend={friend}/>
      );
    }

    seeAllButton =  <Link to={`/u/${match.params.username}/friends`}>
                      See All
                    </Link>;
  } else {
    friendItems = friends.map((friend, idx) => 
      <FriendItem key={idx} friend={friend}/>
    );
  }
  
  return (
    <ul className="friend-index">
      {friendItems}
      {seeAllButton}
    </ul>
  );
};

export default withRouter(FriendIndex);