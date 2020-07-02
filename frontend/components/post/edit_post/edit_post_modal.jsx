import React from 'react';

export default class EditPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.post.body,
      disabled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      if (e.target.value.length) {
        this.setState({ [type]: e.target.value, disabled: false })
      } else {
        this.setState({ [type]: e.target.value, disabled: true })
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.props.post;
    post.body = this.state.body;
    this.props.updatePost(post);
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
          >Save</button>
        </div>
      </form>
    );
  }
}