import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.username, 'newsfeed');
  }
  
  render() {
    const { posts } = this.props;

    if (!posts.length) return null;

    const postIndex = posts.map( post => <li key={post.id}>{post.body}</li> );
    
    debugger
    return (
      <div>
        <ul>
          { postIndex }
        </ul>
      </div>
    );
  }
};