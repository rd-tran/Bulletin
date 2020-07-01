import React from 'react';
import PostMenu from './post_menu/post_menu';

const PostItem = ({currentUser, author, board, post, setPost, deletePost}) => {
  const authorName = author.fname + ' ' + author.lname
  const boardName = board.fname + ' ' + board.lname

  return (
    <li className="post item-container">
      <div className="post item box">
        <PostMenu
          currentUser={currentUser}
          post={post}
          setPost={setPost}
          deletePost={deletePost}
        />
        
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