import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Testing ajax calls
import { fetchPosts } from './actions/post_actions';
import { fetchUsers } from './actions/user_actions';
window.fetchPosts = fetchPosts;
window.fetchUsers = fetchUsers

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');

  if (window.currentUser) {
    const preloadedState = {
      session: window.currentUser
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // fetchUsers(store.getState().session.username)(store.dispatch)
  // fetchPosts(store.getState().session.username, 'newsfeed')(store.dispatch)
  
  // Testing Start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing End

  ReactDOM.render(<Root store={store}/>, root);
});