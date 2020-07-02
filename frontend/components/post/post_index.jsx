import React from 'react';
import PostItem from './post_item';
import PostFormContainer from './create_post/post_form_container';
import Modal from '../modal/modal';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, body: '' }
    this.setPost = this.setPost.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.username, 'newsfeed')
  }
  
  setPost(post) {
    this.setState({ post: post }, () => this.props.openModal('edit'));
  }
  
  setBody(body) {
    this.setState({ body: body });
  }

  render() {
    const { currentUser, users, posts, comments, deletePost } = this.props;
    let postItems;
    
    if (posts.length) {
      postItems = posts.map( post => {
        const postComments = comments.filter( comment => (
          comment.post_id == post.id)
        );

        return (
          <PostItem
            key={post.id}
            currentUser={currentUser}
            users={users}
            author={users[post.author_username]}
            board={users[post.board_username]}
            post={post}
            comments={postComments}
            setPost={this.setPost}
            deletePost={deletePost}
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