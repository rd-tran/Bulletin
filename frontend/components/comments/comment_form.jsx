import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.currentUser.username,
      post_id: this.props.post.id,
      body: '',
      disabled: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length) {
      this.setState({ body: e.target.value, disabled: false });
    } else {
      this.setState({ body: e.target.value, disabled: true });
    }
  }

  handleSubmit(e) {
    if (!this.state.disabled) {
      const comment = ( ({author_username, post_id, body}) => (
        {author_username, post_id, body}
      ))(this.state);
      this.setState({ body: '' }, () => this.props.createComment(comment));
    }
  }

  render() {
    const { post_id, body,} = this.state;
    return (
      <div className="comment-form container">
        <div className="comment-form profile-picture container">
          <div className="comment-form profile-picture picture"></div>
        </div>
        <form
          className="comment-form form"
          onClick={ ()=> $('comment-form.input').focus()}
        >
          <textarea
            type="text"
            value={body}
            placeholder="Write a comment..."
            id={`comment-form-input${post_id}`}
            className="comment-form input"
            onChange={this.handleChange}
            onKeyPress={ (e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit();
              }
            }}
          />
        </form>
      </div>
    );
  }
};