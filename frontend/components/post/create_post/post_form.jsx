import React from 'react';

export default class PostForm extends React.Component {
  render() {
    return (
      <div className="post-form container">
        <div className="post-form header">Create Post</div>
        <div className="post-form modal-trigger trigger"
          onClick={ () => {
            this.props.openModal('create');
          }}
        >
          <input
            type="text"
            value={this.props.body}
            placeholder="What's on your mind?"
            className="post-form modal-trigger input"
            readOnly
          />
        </div>
      </div>
    );
  }
};