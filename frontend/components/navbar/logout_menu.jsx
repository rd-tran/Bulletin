import React from 'react';
import removeDropdown from '../../util/remove_dropdown';

export default class LogoutMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('navbar-menu');
  }

  render() {
    const active = this.state.active ? 'active' : false;
    
    return (
      <div className="navbar-menu container divider">
        <button
          className="navbar-menu dropdown-button button"
          onClick={this.handleClick}
        >
          <div className='navbar-menu dropdown-button icon'></div>
        </button>
        <ul className={`navbar-menu dropdown-list ${active}`}>
          <li className="navbar-menu dropdown-item">
            <button
              className="navbar-menu dropdown-item button"
              onClick={this.props.logout}
            >
              Logout (Thanks for visiting!)
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
