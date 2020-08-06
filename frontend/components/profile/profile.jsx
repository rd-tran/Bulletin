import React from 'react';
import Board from '../board/board';
import IntroContainer from './intro/intro_container';
import TimelinePhotosContainer from './photos/timeline_photos_container';
import TimelineFriendsContainer from './friends/timeline_friends_container';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.username)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.props.fetchUser(this.props.username);
    }
  }
  
  render() {
    const { user, fetchPosts } = this.props;

    if (!user || !user.email) return null;

    return (
      <div className="profile-container">
        <div id="cover-container">
          <div className="cover-photo">Cover Photo goes here</div>
          <div className="nav">Profile nav goes here</div>
        </div>

        <div id="timeline-container">
          <div className="content">
            <IntroContainer user={user}/>
            <TimelinePhotosContainer user={user}/>
            <TimelineFriendsContainer user={user}/>
          </div>
          <Board user={user} fetchPosts={fetchPosts}/>
        </div>
      </div>
    )
  }
}

export default Profile;