import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      post_id: this.props.post.id,
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    this.props.createComment(this.props.state);
  }

  render() {
    return (
      <div className="comment-form container">
        <form
          className="comment-form form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            value={this.state.body}
            className="comment-form input"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
};