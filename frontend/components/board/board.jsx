import React from 'react';
import PostIndex from './post/post_index';

// export default class Board extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   render() {
//     if (!posts.length) return null;
//     const postItems = posts.map( post => )
//     return (
//       <div>
//         <ul>
//           {  }
//         </ul>
//       </div>
//     );
//   }
// };

const Board = ({ users, posts, fetchPosts }) => {
  return (
    <div className="board">
      <PostIndex users={users} posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
};

export default Board;