import React from 'react';
import removeDropdown from '../../util/remove_dropdown';

export default class CommentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      active: false
    };
    this.removeDropdown = removeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleClick() {
    const toggle = this.state.active ? false : true;
    this.setState({ active: toggle });
    this.removeDropdown('comment-menu');
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({active: false}, () => {
      this.props.updatePost(this.props.post);
    });
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.setState({active: false}, () => {
      $(window).prop("onclick", null).off("click");
      this.props.deleteComment(this.props.comment.id);
    });
  }

  render() {
    const active = this.state.active ? 'active' : ''

    const editButton = (
      <li
      className='comment-menu dropdown-item item'
      onClick={this.handlEdit}
      >
        <button
          className='comment-menu dropdown-item button'
          onClick={this.handleEdit}
          >
          Edit
        </button>
      </li>
    );

    const deleteButton = (
      <li
        className='comment-menu dropdown-item item'
        onClick={this.handleDelete}
      >
        <button
          className='comment-menu dropdown-item button'
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </li>
    );
    
    return(
      <div className="comment-menu container">
        <div
          className={'comment-menu dropdown-button icon'}
          onClick={this.handleClick}
        >
          <ul className={`comment-menu dropdown-list ${active}`}>
            {/* { editButton } */}
            { deleteButton }
          </ul>
        </div>
      </div>
    );
  }
};