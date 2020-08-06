import React from 'react';
import Board from '../board/board';
import Intro from '../intro/intro';

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

        <div id="content-container">
          <div className="content">
            <Intro
              user={user}
            />

            <div className="content">
              Photos go here
            </div>

            <div className="content">
              Friends go here
            </div>
          </div>

          <Board user={user} fetchPosts={fetchPosts}/>
        </div>
      </div>
    )
  }
}

export default Profile;