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
          fetchPosts={fetchPosts}
        />
      </div>
    );
  }

};