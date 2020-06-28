import React from 'react';
import { Link } from 'react-router-dom';
import removeDropdown from '../../../util/remove_dropdown';

export default class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('friend-request-menu');
  };
  
  render() {
    const active = this.state.active ? 'active' : ''
    
    return(
      <div className="friend-request-menu container">
        <button
          className="friend-request-menu dropdown-button button"
          onClick={this.handleClick}
        >
          <div
            className={`friend-request-menu dropdown-button icon ${active}`}
          >
          </div>
        </button>
        <ul className={`friend-request-menu dropdown-list ${active}`}>
          <li className='friend-request-menu dropdown-item'>
            Friend requests go here.
          </li>
        </ul>
      </div>
    );
  } 
};