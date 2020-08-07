import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../../board/board';
import IntroContainer from './intro/intro_container';
import TimelinePhotosContainer from './photos/timeline_photos_container';
import TimelineFriendsContainer from './friends/timeline_friends_container';
import { fetchPosts } from '../../../actions/post_actions';

const TimelineContainer = ({ match }) => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => {
    return state.entities.users[match.params.username];
  });
  const useFetchPosts = (username) => dispatch(fetchPosts(username, 'board'));

  return (
    <div id="timeline-container">
      <div className="content">
        <IntroContainer user={user}/>
        <TimelinePhotosContainer user={user}/>
        <TimelineFriendsContainer user={user}/>
      </div>
      <Board user={user} fetchPosts={useFetchPosts}/>
    </div>
  );
};

export default TimelineContainer;