import React from 'react';
import PostIndex from '../post/post_index';

const Board = ({ 
  currentUser, users, posts, comments, fetchPosts, deletePost, openModal
}) => {
  return (
    <div className="board-container">
      <PostIndex
        currentUser={currentUser}
        users={users}
        posts={posts}
        comments={comments}
        fetchPosts={fetchPosts}
        deletePost={deletePost}
        openModal={openModal}
      />
    </div>
  );
};

export default Board;