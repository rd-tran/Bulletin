import React from 'react';

export default class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.user.username,
      board_username: this.props.user.username,
      body: $('.post-form.modal-trigger.input').val(),
      disabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      if (e.target.textContent.length) {
        $('.post-form.modal-trigger.input').val(e.target.textContent)
        this.setState({ [type]: e.target.textContent, disabled: false })
      } else {
        this.setState({ disabled: true })
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = (( {author_username, board_username, body}) => (
      {author_username, board_username, body}
    ))(this.state);
    this.props.createPost(post);
    this.props.closeModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="post-form form">
        <div className="post-form profile-picture"></div>
        <div
          content={this.state.body}
          placeholder="What's on your mind?"
          contentEditable={true}
          className="post-form body create"
          onInput={this.handleChange('body')}
        >
          {this.state.body}
        </div>
        <div className="post-form button-container">
          <button
            className="post-form button"
            disabled={this.state.disabled}
          >Post</button>
        </div>
      </form>
    );
  }
}