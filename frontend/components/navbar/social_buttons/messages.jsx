import React from 'react';
import { Link } from 'react-router-dom';
import removeDropdown from '../../../util/remove_dropdown';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('message-menu');
  }
  
  render() {
    const active = this.state.active ? 'active' : ''

    return (
      <div className="message-menu container">
        <button
          className="message-menu dropdown-button button"
          onClick={this.handleClick}
        >
          <div className={`message-menu dropdown-button icon ${active}`}></div>
        </button>
        <ul className={`message-menu dropdown-list ${active}`}>
          <li className='message-menu dropdown-item'>
            Messages go here.
          </li>
        </ul>
      </div>
    );
  }
};