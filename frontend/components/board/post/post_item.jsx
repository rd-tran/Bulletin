import React from 'react';

const PostItem = ({ user, board, post }) => {
  const authorName = user.fname + ' ' + user.lname
  const boardName = board.fname + ' ' + board.lname
  
  return (
    <li className="post item-container">
      <div className="post item">
        <div className="post item header">
          { authorName } {' > '} { boardName }
        </div>

        <div>
          {post.body}
        </div>
      </div>
    </li>
  );
};

export default PostItem;