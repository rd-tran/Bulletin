import React from 'react';
import CommentMenu from './comment_menu';

const CommentItem = ({
  user, currentUser, comment, updateComment, deleteComment
}) => {
  const authorName = user.fname + ' ' + user.lname;
  
  let commentMenu;
  if (currentUser.username === comment.author_username) {
    commentMenu = <CommentMenu
      user={user}
      comment={comment}
      updateComment={updateComment}
      deleteComment={deleteComment}
    />
  }
  
  return (
    <div className="comment-item container"
      // onMouseEnter={
      //   () => {
      //     $('.comment-menu.dropdown-button.icon').addClass('active')
      //   }
      // }
      // onMouseLeave={
      //   () => {
      //     $('.comment-menu.dropdown-button.icon').removeClass('active')
      //   }
      // }
    >
      <div className="comment-item profile-picture container">
        <div className="comment-item profile-picture picture"></div>
      </div>
      <div className="comment-item item">
        <div className="comment-item header">
          { authorName}
        </div>
        <div className="comment-item body content">
          { comment.body }
        </div>
      </div>
      { commentMenu }
    </div>
  );
};

export default CommentItem;