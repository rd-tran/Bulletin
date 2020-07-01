import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

const Comments = ({
  currentUser,
  users,
  post,
  comments,
  createComment,
  updateComment,
  deleteComment
}) => {
  const commentItems = (
    comments.map( comment => {
      return (
        <CommentItem
          key={comment.id}
          user={users[comment.author_username]}
          currentUser={currentUser}
          comment={comment}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      );
    })
  );
  
  return (
    <div className="comments-container">
      { commentItems }
      <CommentForm
        currentUser={currentUser}
        post={post}
        createComment={createComment}
      />
    </div>
  );
};

export default Comments;