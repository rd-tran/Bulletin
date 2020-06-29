import React from 'react';
import PostItem from './post_item';

export default class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { users, posts } = this.props;
    if (!posts.length) return null;
    
    const postItems = posts.map( post => (
      <PostItem
        key={post.id}
        user={users[post.author_username]}
        post={post}
      />
    ));

    return (
      <div className="post container">
        <ul className="post index container">
          { postItems }
        </ul>
      </div>
    );
  }
};