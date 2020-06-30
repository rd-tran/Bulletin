import React from 'react';

export default class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.user.username,
      board_username: this.props.user.username,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post);
    this.props.closeModal();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="post-form form">
        <div className="post-form profile-picture"></div>
        <textarea
          value={this.state.body}
          onChange={this.handleChange('body')}
        />
        <button className="post-form button">Post</button>
      </form>
    );
  }
}