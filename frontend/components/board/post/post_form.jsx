import React from 'react';
import Modal from '../../modal/modal';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-form container">
        <div className="post-form header">Create Post</div>
        <div className="post-form modal-trigger trigger"
          onClick={ () => {
            this.props.openModal('create');
          }}
        >
          <textarea
            type="text"
            placeholder="What's on your mind?"
            className="post-form modal-trigger input"
            readOnly
          />
        </div>
      </div>
    );
  }
};