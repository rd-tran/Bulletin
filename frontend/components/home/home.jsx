import React from 'react';
import Board from '../board/board';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Board
          users={this.props.users}
          posts={this.props.posts}
          fetchPosts={ () => 
            this.props.fetchPosts(this.props.currentUser.username, 'newsfeed')
          }
        />
      </div>
    );
  }
};

// const Home = () => {
//   return (
//     <div>
//       <Board />
//     </div>
//   );
// };

// export default Home;