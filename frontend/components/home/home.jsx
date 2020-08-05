import React from 'react';
import Board from '../board/board';

const Home = ({ user, fetchPosts }) => {
  return (
    <div id="home" className="logged-in">
      <Board user={user} fetchPosts={fetchPosts}/>
    </div>
  );
};

export default Home;