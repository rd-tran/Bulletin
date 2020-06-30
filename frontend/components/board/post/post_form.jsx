import React from 'react';
import Modal from '../../modal/modal';

export default class PostForm extends React.Component {
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
  }

  render() {
    return (
      <div className="post-form container">
        <div className="post-form header">Create Post</div>
        <div className="post-form modal-trigger"
          onClick={ () => this.props.openModal('create') }
        >
          What's on your mind?
        </div>
      </div>
    );
  }
};