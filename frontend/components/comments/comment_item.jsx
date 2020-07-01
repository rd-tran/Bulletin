import React from 'react';

const CommentItem = ({currentUser, comment, updateComment, deleteComment}) => {
  return (
    <div className="comment-item container">
      <div className="comment-item profile-picture"></div>
      <div className="comment-item item">
        <div className="comment-item item body">
          { comment.body }
        </div>
        <div className="comment-item item menu">

        </div>
      </div>
    </div>
  );
};

export default CommentItem;