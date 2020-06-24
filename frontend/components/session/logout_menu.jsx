import React from 'react';

const LogoutMenu = ({ logout }) => {
  const triggerDropdown = () => {
    $('#dropdown').toggleClass('toggled')
  }

  return (
    <div id="logout-menu">
      <div className="navbar-icon trigger"
      onClick={triggerDropdown}>
        <span className="trigger">🔽</span>
        <ul id="dropdown">
          <li>
            <button onClick={logout} id="logout-button">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LogoutMenu;