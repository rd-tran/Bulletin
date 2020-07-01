export const createComment = (post) => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {post}
  })
};

export const updateComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: {comment}
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  });
};