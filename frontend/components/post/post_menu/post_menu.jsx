import React from 'react';
import removeDropdown from '../../../util/remove_dropdown';

export default class PostMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('post-menu');
  };

  handleEdit(e) {
    e.preventDefault();
    this.setState({active: false}, () => {
      this.props.setPost(this.props.post);
    });
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.setState({active: false}, () => {
      this.props.deletePost(this.props.post.id);
    });
  }
  
  render() {
    const active = this.state.active ? 'active' : ''

    return(
      <div className="post-menu container">
        <div
          className={`post-menu dropdown-button icon`}
          onClick={this.handleClick}
          onBlur={ (e) => {
            debugger
          }}
        >
        </div>
        <ul className={`post-menu dropdown-list ${active}`}>
          <li
            className='post-menu dropdown-item item'
            onClick={this.handlEdit}
          >
            <button
              className='post-menu dropdown-item button'
              onClick={this.handleEdit}
            >
              Edit
            </button>
          </li>
          <li
            className='post-menu dropdown-item item'
            onClick={this.handleDelete}
          >
            <button
              className='post-menu dropdown-item button'
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  } 
};