import React from 'react';
import PostIndexContainer from '../post/post_index_container';

const Board = ({ fetchPosts }) => {
  return (
    <div className="board-container">
      <PostIndexContainer fetchPosts={fetchPosts} />
    </div>
  );
};

export default Board;