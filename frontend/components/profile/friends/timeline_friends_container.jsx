import React from 'react';

function TimelineFriendsContainer({ user }) {  
  console.log(user);

  return (
    <div className="timeline-friends-container">
      <div className="header-container">
        <div className="timeline-friend-icon"></div>
        <span className="header">Photos</span>
      </div>
    </div>
  )
}

export default TimelineFriendsContainer;