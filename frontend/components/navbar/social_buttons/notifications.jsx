import React from 'react';
import { Link } from 'react-router-dom';
import removeDropdown from '../../../util/remove_dropdown';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('notification-menu');
  }
  
  render() {
    const active = this.state.active ? 'active' : ''

    return (
      <div className="notification-menu container">
        <button
          className="notication-menu dropdown-button button"
          onClick={this.handleClick}
        >
          <div
            className={`notification-menu dropdown-button icon ${active}`}
          >
          </div>
        </button>
        <ul className={`notification-menu dropdown-list ${active}`}>
          <li className='notification-menu dropdown-item'>
            Notifications go here.
          </li>
        </ul>
      </div>
    );
  }
};