import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostModalContainer from '../board/post/create_post_modal_container';

function Modal({modal, closeModal, createPost}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create':
      component = <CreatePostModalContainer />;
      break;
    case 'edit post':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
