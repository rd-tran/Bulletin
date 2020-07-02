import React from 'react';
import CommentMenu from './comment_menu';
import EditCommentForm from './edit_comment_form';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      showMenu: false,
      showDropdown: false
    }
    this.triggerMenu = this.triggerMenu.bind(this);
    this.triggerDropdown = this.triggerDropdown.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
  }

  triggerMenu(state) {
    if (state) {
      this.setState({ showMenu: state })
    } else {
      this.setState({ showMenu: state, showDropdown: state })
    }
  }

  triggerDropdown(state) {
    this.setState({ showDropdown: state });
  }
  
  showEditForm() {
    this.setState({ edit: true });
  }

  hideEditForm() {
    this.setState({ edit: false });
  }

  render() {
    const {
      user, currentUser, comment, updateComment, deleteComment
    } = this.props;

    const authorName = user.fname + ' ' + user.lname;
    const active = this.state.edit ? 'active' : '';
    const hide = this.state.edit ? 'hide' : '';

    let commentMenu;
    if (currentUser.username === comment.author_username) {
      commentMenu = (
        <CommentMenu
          user={user}
          comment={comment}
          showMenu={this.state.showMenu}
          triggerMenu={this.triggerMenu}
          showDropdown={this.state.showDropdown}
          triggerDropdown={this.triggerDropdown}
          showEditForm={this.showEditForm}
          deleteComment={deleteComment}
        />
      );
    }
    
    return (
      <div className="comment-item container"
        onMouseEnter={
          () => {
            if (!this.state.edit) {
              this.triggerMenu(true);
            }
          }
        }
        onMouseLeave={
          () => {
            if (!this.state.edit) {
              this.triggerMenu(false);
            }
          }
        }
      >
        <div className="comment-item profile-picture container">
          <div className="comment-item profile-picture picture"></div>
        </div>

        <div className={`comment-item item ${hide}`}>
          <div className="comment-item header">
            { authorName}
          </div>
          <div className={'comment-item body content'}>
            { comment.body }
          </div>
        </div>

        <EditCommentForm
          active={active}
          comment={comment}
          updateComment={updateComment}
          hideEditForm={this.hideEditForm}
        />

        { commentMenu }
      </div>
    );
  }
}