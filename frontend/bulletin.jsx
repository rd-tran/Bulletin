import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Testing ajax calls
import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
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

  const removeDropdown = (e) => {
    if (e.target.className !== 'trigger') {
      $('#dropdown').removeClass('toggled')
    }
  }
  
  $(window).on('click', removeDropdown);
  ReactDOM.render(<Root store={store}/>, root);
});