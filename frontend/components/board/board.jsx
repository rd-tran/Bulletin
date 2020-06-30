import React from 'react';
import PostIndex from './post/post_index';

export default class Board extends React.Component {
  render() {
    const { users, posts } = this.props;

    return (
      <div className="board-container">
        <PostIndex users={users} posts={posts} />
      </div>
    );
  }
};