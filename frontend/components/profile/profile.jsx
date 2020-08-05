import React from 'react';
import Board from '../board/board';
import BoardContainer from '../board/board_container';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }
  
  render() {
    const { user } = this.props;
    
    if (!user.email) return null;
    
    return (
      <div id="profile-container">
        <div id="cover-container">
          Cover photo goes here
        </div>
        <div className="content-container">
          <BoardContainer/>
          {/* <Board/> */}
        </div>
      </div>
    )
  }
}

export default Profile;