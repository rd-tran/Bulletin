import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostModalContainer from
  '../post/create_post/create_post_modal_container';
import EditPostModalContainer from
  '../post/edit_post/edit_post_modal_container';

function Modal({
  modal, closeModal, post, body, setBody, photoFile, photoUrl, setFile
}) {
  if (!modal) {
    return null;
  }
  let component;
  let type;
  switch (modal) {
    case 'create':
      component = <CreatePostModalContainer
                    body={body} setBody={setBody}
                    photoFile={photoFile} photoUrl={photoUrl} setFile={setFile}
                  />;
      type = <div className="post-form type">Create Post</div>;
      break;
    case 'edit':
      component = <EditPostModalContainer post={post}/>;
      type = <div className="post-form type">Edit Post</div>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { type }
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.modal,
    post: ownProps.post,
    body: ownProps.body,
    setbody: ownProps.setBody,
    photoFile: ownProps.photoFile,
    photoUrl: ownProps.photoUrl,
    setFile: ownProps.setFile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
