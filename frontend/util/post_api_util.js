export const fetchPosts = (username, type) => {
  return $.ajax({
    url: '/api/posts',
    method: 'GET',
    data: {username: username, type: type}
  });
};

export const fetchPost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'GET'
  })
};

export const createPost = (post) => {
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: {post}
  })
};

export const updatePost = (post) => {
  return $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: {post}
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  });
};