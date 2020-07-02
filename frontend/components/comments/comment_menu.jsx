import React from 'react';
import removeDropdown from '../../util/remove_dropdown';

export default class CommentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
    };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleClick() {
    const toggle = this.props.showDropdown ? false : true;
    this.props.triggerDropdown(toggle)
    this.removeDropdown(`comment-menu ${this.props.comment.id}`);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.triggerMenu(false);
    this.props.showEditForm();
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.triggerMenu(false);
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const showMenu = this.props.showMenu ? 'active' : '';
    const showDropdown = this.props.showDropdown ? 'active' : '';
    const { comment } = this.props;

    const editButton = (
      <li
      className={`comment-menu ${comment.id} dropdown-item item`}
      onClick={this.handlEdit}
      >
        <button
          className={`comment-menu ${comment.id} dropdown-item button`}
          onClick={this.handleEdit}
          >
          Edit
        </button>
      </li>
    );

    const deleteButton = (
      <li
        className={`comment-menu ${comment.id} dropdown-item item`}
        onClick={this.handleDelete}
      >
        <button
          className={`comment-menu ${comment.id} dropdown-item button`}
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </li>
    );
    
    return(
      <div className={`comment-menu ${comment.id} container`}>
        <div
          className={
            `comment-menu ${comment.id} dropdown-button icon ${showMenu}`
          }
          onClick={this.handleClick}
        >
          <ul className={
            `comment-menu ${comment.id} dropdown-list ${showDropdown}`}
          >
            { editButton }
            { deleteButton }
          </ul>
        </div>
      </div>
    );
  }
};