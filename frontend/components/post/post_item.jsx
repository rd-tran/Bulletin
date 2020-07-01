import React from 'react';
import PostMenu from './post_menu/post_menu';
import CommentsContainer from '../comments/comments_container';

const PostItem = ({currentUser, author, board, post, setPost, deletePost}) => {
  const authorName = author.fname + ' ' + author.lname
  const boardName = board.fname + ' ' + board.lname

  let postMenu;
  if (currentUser.username === author.username) {
    postMenu = <PostMenu
      currentUser={currentUser}
      post={post}
      setPost={setPost}
      deletePost={deletePost}
    />
  } else if (currentUser.username === board.username) {
    postMenu = <PostMenu
      currentUser={currentUser}
      post={post}
      deletePost={deletePost}
    />
  }
  
  const comments = Object.values(getState().entities.comments)
    .filter( comment => comment.post_id == post.id);

  return (
    <li className="post item-container">
      <div className="post item box">
        { postMenu }
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
          <CommentsContainer comments={comments}/>
        </div>
      </div>
    </li>
  );
};

export default PostItem;