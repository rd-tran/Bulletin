import React from 'react';
import Board from '../board/board';

export default class Home extends React.Component {
  
  render() {
    const {
      currentUser, users, posts, fetchPosts, deletePost, openModal
    } = this.props;

    return (
      <div className="home">
        <Board
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