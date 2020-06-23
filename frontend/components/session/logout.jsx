import React from 'react';

const Logout = ({ logout }) => {
  const triggerDropdown = () => {
    $('#dropdown').toggleClass('toggled')
  }

  return (
    <div id="logout-menu">
      <div id="navbar-icon">
        <span className="trigger" onClick={triggerDropdown}>🔽</span>
        <ul id="dropdown">
          <li>
            <button onClick={logout} id="logout-button">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Logout;