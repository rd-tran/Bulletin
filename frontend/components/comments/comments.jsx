import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

const Comments = ({
  currentUser, comments, createComment, updateComment, deleteComment}) => {
  const commentItems = (
    comments.map( comment => {
      return (
        <CommentItem
          key={comment.id}
          currentUser={currentUser}
          comment={comment}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      );
    })
  );
  
  return (
    <div>
      { commentItems }
      <CommentForm currentUser={currentUser} createComment={createComment} />
    </div>
  );
};

export default Comments;