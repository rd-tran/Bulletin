import React from 'react';

export default class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.currentUser.username,
      board_username: this.props.board.username,
      body: this.props.body,
      disabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      if (e.target.value.length) {
        this.setState({ [type]: e.target.value, disabled: false }, () => {
          this.props.setBody(this.state.body)
        })
      } else {
        this.setState({ [type]: e.target.text, disabled: true })
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = ( ({author_username, board_username, body}) => (
      {author_username, board_username, body}
    ))(this.state);
    this.props.createPost(post);
    this.props.closeModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="post-form form">
        <div className="post-form details">
          <div className="post-form profile-picture"></div>
          
          <div className="post-form body-container">
            <textarea type="text"
              value={this.state.body}
              placeholder="What's on your mind?"
              className="post-form body create"
              onChange={this.handleChange('body')}
            />
          </div>
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