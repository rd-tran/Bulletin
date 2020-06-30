import React from 'react';

const PostItem = ({ user, board, post }) => {
  const authorName = user.fname + ' ' + user.lname
  const boardName = board.fname + ' ' + board.lname
  
  return (
    <li className="post item-container">
      <div className="post item box">
        <div className="post item header">
          { authorName } {' > '} { boardName }
        </div>

        <div className="post item body">
          {post.body}
        </div>
        <hr/>

        <div>
          Likes go here
        </div>
        <hr/>

        <div className="comment container">
          Comments go here
        </div>
      </div>
    </li>
  );
};

export default PostItem;