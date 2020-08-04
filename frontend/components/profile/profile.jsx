import React from 'react';
import Board from '../board/board';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }

  componentDidUpdate(prevProps){
    if (prevProps.user.email !== this.props.user.email) {
      this.props.fetchUser(this.props.user.id)
    }
  }
  
  render() {
    const {
      currentUser, user, users, posts, comments,
      fetchPosts, deletePost, openModal
    } = this.props;
    
    if (!user.email) return null;
    
    return (
      <div id="profile-container">
        <div id="cover-container">
          Cover photo goes here
        </div>
        <div className="content-container">
          <Board
            currentUser={currentUser}
            users={users}
            posts={posts}
            comments={comments}
            fetchPosts={fetchPosts}
            deletePost={deletePost}
            openModal={openModal}
          />
          <div>The board should go here</div>
        </div>
      </div>
    )
  }
}

export default Profile;