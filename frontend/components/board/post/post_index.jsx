import React from 'react';
import PostItem from './post_item';
import PostFormContainer from './post_form_container';

export default class PostIndex extends React.Component {
  render() {
    const { users, posts } = this.props;
    const postItems = posts.map( post => {
      return (
        <PostItem
          key={post.id}
          user={users[post.author_username]}
          board={users[post.board_username]}
          post={post}
        />
      );
    });

    return (
      <div className="post container">
        <PostFormContainer />
        <ul className="post index container">
          { postItems }
        </ul>
      </div>
    );
  }
};