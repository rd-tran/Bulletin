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

        </div>

        <div className="post-form photo-input-container">
          <input type="file"
            id="photo-input"
            onChange={(e) => this.props.setFile(e)}
          />

          <label for="photo-input" className="post-form photo-upload">
            <div className="post-form photo-icon"></div>
            <div className="post-form photo-text">Photo</div>
          </label>
        </div>
      </div>
    );
  }
};