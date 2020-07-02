import React from 'react';

export default class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }
  
  handleSubmit() {
    const comment = this.props.comment;
    comment.body = this.state.body;
    this.props.updateComment(comment);
    this.props.hideEditForm();
  }

  render() {
    const { active, hideEditForm } = this.props;
    const { body } = this.state;
    
    return (
      <div className={`edit-comment-form form container ${active}`}>
        <div
          className="edit-comment-form input-container"
        >
          <textarea
            type="text"
            value={body}
            placeholder="Write a comment..."
            className="edit-comment-form input"
            onChange={this.handleChange}
            onKeyPress={ (e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit();
              }
            }}
          />
        </div>

        <a
          className={`edit-comment-form cancel ${active}`}
          onClick={ (e) => {
            e.preventDefault();
            hideEditForm();
          }}
        >
          Cancel
        </a>
      </div>
    );
  }
};