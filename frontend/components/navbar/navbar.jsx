import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import LeftSide from './left_side';
import RightSide from './right_side';

export default class NavBar extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    
    if (Object.values(currentUser).length) {
      return (
        <div id="navbar-container" className="logged-in">
          <div className="navbar logged-in">
            <LeftSide />
            <RightSide logout={logout}/>
          </div>
        </div>
      );
    }

    return (
      <div id="navbar-container" className="logged-out">
        <div className="navbar logged-out">
          <a href="/">
            <h1 className="text-logo">bulletin</h1>
          </a>
          <LoginFormContainer />
        </div>
      </div>
    );
  }
};
