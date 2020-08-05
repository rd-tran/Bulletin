import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions'
import Home from './home';

const mDTP = (dispatch) => {
  return ({
    fetchPosts: (username) => dispatch(fetchPosts(username, 'newsfeed')),
  });
}

export default connect(null, mDTP)(Home);