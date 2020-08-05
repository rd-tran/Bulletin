import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import PostItem from './post_item';

const mSTP = (state, ownProps) => {
  return ({
    currentUser: state.session,
    author: ownProps.author,
    board: ownProps.board,
    post: ownProps.post,
    comments: ownProps.comments,
  });
};

const mDTP = (dispatch, ownProps) => {
  return ({
    setPost: ownProps.setPost,
    deletePost: (postId) => dispatch(deletePost(postId))
  });
};

export default connect(mSTP, mDTP)(PostItem);