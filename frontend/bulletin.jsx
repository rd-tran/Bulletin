import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Testing ajax calls
// import { fetchPosts } from './util/post_api_util';
// window.fetchPosts = fetchPosts;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: window.currentUser
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing Start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing End

  ReactDOM.render(<Root store={store}/>, root);
});