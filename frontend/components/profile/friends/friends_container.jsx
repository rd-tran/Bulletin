import React from 'react';
import { withRouter } from 'react-router-dom';

const FriendsContainer = ({ location }) => {
  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];

  /**
   * ? Leaving this `pseudocode` here
   * * Reminder:
   *   ! Limit the number of elements being displayed if not proper path
   *   ! Add see all button that redirects to the proper path
   */
  let limit;
  if (lastPathPart != 'friends') {
    limit = true;
  }
  
  return (
    <div className="profile-info friends-container">

    </div>
  );
};

export default withRouter(FriendsContainer);