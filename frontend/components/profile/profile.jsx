import React from 'react';
import Board from '../board/board';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.username !== this.props.user.username) {
      this.props.fetchUser(this.props.user.id);
    }
  }
  
  render() {
    const { user, fetchPosts } = this.props;

    if (!user.email) return null;
    
    return (
      <div className="profile-container">
        <div id="cover-container">
          <div className="cover-photo">Cover Photo goes here</div>
          <div className="nav">Profile nav goes here</div>
        </div>

        <div id="content-container">
          <div className="content-info">
            <div className="content-info intro">
              Intro goes here
            </div>

            <div className="content-info photos">
              Photos go here
            </div>

            <div className="content-info friends">
              Friends go here
            </div>
          </div>

          <Board fetchPosts={fetchPosts}/>
        </div>
      </div>
    )
  }
}

export default Profile;