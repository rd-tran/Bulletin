import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions'
import Home from './home';

const mSTP = (state) => {
  return ({
    user: state.session
  });
}

const mDTP = (dispatch) => {
  return ({
    fetchPosts: (username) => dispatch(fetchPosts(username, 'newsfeed')),
  });
}

export default connect(mSTP, mDTP)(Home);