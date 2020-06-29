import React from 'react';
import Board from '../board/board';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.currentUser.username)
    .then(
      this.props.fetchPosts(this.props.currentUser.username, 'newsfeed')
    );
  }
  
  render() {
    const { users, posts } = this.props;
    
    if (!posts.length) return null;
    return (
      <div>
        <Board users={users} posts={posts} />
      </div>
    );
  }
};