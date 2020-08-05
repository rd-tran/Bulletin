import React from 'react';
import PostItemContainer from '../post_item/post_item_container';
import PostFormContainer from '../create_post/post_form_container';
import Modal from '../../modal/modal';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, body: '' }
    this.setPost = this.setPost.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.user.username);
  }
  
  setPost(post) {
    this.setState({ post: post }, () => this.props.openModal('edit'));
  }
  
  setBody(body) {
    this.setState({ body: body });
  }

  render() {
    const { users, posts, comments } = this.props;
    let postItems;
    
    if (posts.length) {
      postItems = posts.map( post => {
        const postComments = comments.filter( comment => (
          comment.post_id == post.id)
        );

        return (
          <PostItemContainer
            key={post.id}
            author={users[post.author_username]}
            board={users[post.board_username]}
            post={post}
            comments={postComments}
            setPost={this.setPost}
          />
        );
      })
    };
    
    return (
      <div className="post container">
        <PostFormContainer
          body={this.state.body}
        />
        <Modal
          post={this.state.post}
          body={this.state.body}
          setBody={this.setBody}
        />
        <ul className="post index container">
          { postItems }
        </ul>
      </div>
    );
  }
};