import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = ({ posts, comments, users, username }) => ({
  type: RECEIVE_ALL_POSTS,
  posts,
  comments,
  users,
  username
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = (username, type) => (dispatch) => {
  PostApiUtil.fetchPosts(username, type)
    .then( posts => {
      if (type === 'newsfeed') {
        dispatch(receiveAllPosts(posts)) 
      } else if (type === 'board') {
        dispatch(receiveAllPosts({ ...posts, username })) 
      }
    });
};

export const fetchPost = (postId) => (dispatch) => {
  PostApiUtil.fetchPost(postId)
    .then( post => dispatch(receivePost(post)) );
};

export const createPost = (post) => (dispatch) => {
  PostApiUtil.createPost(post)
    .then( post => {
      dispatch(receivePost(post));
    });
};

export const updatePost = (post) => (dispatch) => {
  PostApiUtil.updatePost(post)
    .then( post => dispatch(receivePost(post)) );
};

export const deletePost = (postId) => (dispatch) => {
  PostApiUtil.deletePost(postId)
    .then( postId => dispatch(removePost(postId)) );
};
