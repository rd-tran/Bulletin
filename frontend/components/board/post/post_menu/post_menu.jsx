import React from 'react';
import removeDropdown from '../../../../util/remove_dropdown';

export default class PostMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    // this.removeDropdown('friend-request-menu');
  };
  
  render() {
    const active = this.state.active ? 'active' : ''
    
    return(
      <div className="post-menu container">
        <div
          className={`post-menu dropdown-button icon`}
          onClick={this.handleClick}
        >
        </div>
        <ul className={`post-menu dropdown-list ${active}`}>
          <li className='post-menu dropdown-item'>
            <button
              className='post-menu dropdown-item button'
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  } 
};