import React from 'react';
import Board from '../board/board';

export default class Home extends React.Component {
  
  render() {
    const {
      currentUser, users, posts, comments, fetchPosts, deletePost, openModal
    } = this.props;

    return (
      <div id="home" className="logged-in">
        <Board
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
  }
  
};