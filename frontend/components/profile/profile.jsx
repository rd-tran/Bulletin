import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_utils';
import TimelineContainer from './timeline/timeline_container';
import AboutContainer from './about/about_container';
import FriendsContainer from './friends/friends_container';
import PhotosContainer from './photos/photos_container';

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

        <Switch>
          <ProtectedRoute
            path="/u/:username/timeline"
            component={TimelineContainer}
          />
          <ProtectedRoute
            path="/u/:username/about"
            component={AboutContainer}
          />
          <ProtectedRoute
            path="/u/:username/friends"
            component={FriendsContainer}
          />
          <ProtectedRoute
            path="/u/:username/photos"
            component={PhotosContainer}
          />
          <Redirect to="/u/:username/timeline"/>
        </Switch>
      </div>
    )
  }
}

export default Profile;