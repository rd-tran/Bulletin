import React from 'react';
import FriendRequests from './friend_requests';
import Messages from './messages';
import Notifications from './notifications';

const SocialButtons = () => {
  return (
    <div className="social-buttons-container">
      <FriendRequests/>
      <Messages/>
      <Notifications/>
    </div>
  );
};

export default SocialButtons;