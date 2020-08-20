import React from 'react';

export default class PostForm extends React.Component {
  render() {
    return (
      <div className="post-form container">
        <div className="post-form-header container">
          <div className="post-form-header header">Create Post</div>
        </div>

        <div className="post-form details">
          <div className="post-form profile-picture">
          </div>

          <div className="post-form modal-trigger trigger"
            onClick={ () => {
              this.props.openModal('create');
            }}
          >
            <textarea
              type="text"
              value={this.props.body}
              placeholder="What's on your mind?"
              className="post-form modal-trigger input"
              readOnly
            />
          </div>

          <input type="file"
            onChange={(e) => this.props.setFile(e)}
          />
        </div>
      </div>
    );
  }
};