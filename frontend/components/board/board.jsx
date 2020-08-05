import React from 'react';
import PostIndexContainer from '../post/post_index/post_index_container';

const Board = ({ user, fetchPosts }) => {
  return (
    <div className="board-container">
      <PostIndexContainer user={user} fetchPosts={fetchPosts} />
    </div>
  );
};

export default Board;