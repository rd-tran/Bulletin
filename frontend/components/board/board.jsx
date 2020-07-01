import React from 'react';
import PostIndex from '../post/post_index';

export default class Board extends React.Component {
  render() {
    const {
      currentUser, users, posts, fetchPosts, deletePost, openModal
    } = this.props;

    return (
      <div className="board-container">
        <PostIndex 
          currentUser={currentUser}
          users={users}
          posts={posts}
          fetchPosts={fetchPosts}
          deletePost={deletePost}
          openModal={openModal}
        />
      </div>
    );
  }
};