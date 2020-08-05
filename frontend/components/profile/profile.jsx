import React from 'react';
import Board from '../board/board';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }
  
  render() {
    const { user, fetchPosts } = this.props;
    
    if (!user.email) return null;
    
    return (
      <div id="profile-container">
        <div id="cover-container">
          Cover photo goes here
        </div>
        <div className="content-container">
          <Board fetchPosts={fetchPosts}/>
        </div>
      </div>
    )
  }
}

export default Profile;