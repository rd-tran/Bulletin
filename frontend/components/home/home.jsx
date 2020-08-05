import React from 'react';
import Board from '../board/board';

const Home = ({ fetchPosts }) => {
  return (
    <div id="home" className="logged-in">
      <Board
        fetchPosts={fetchPosts}
      />
    </div>
  );
};

export default Home;