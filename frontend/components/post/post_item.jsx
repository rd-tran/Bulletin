import React from 'react';
import PostMenu from './post_menu/post_menu';
import CommentsContainer from '../comments/comments_container';

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ hideComments: false });
    this.handleHideComments = this.handleHideComments.bind(this);
  }

  handleHideComments() {
    this.setState({ hideComments: !this.state.hideComments})
  }

  render() {
    const {currentUser, author, board, post, setPost, deletePost} = this.props;

    const authorName = author.fname + ' ' + author.lname
    const boardName = board.fname + ' ' + board.lname

    let postMenu;
    if (currentUser.username === author.username) {
      postMenu = <PostMenu
        currentUser={currentUser}
        post={post}
        setPost={setPost}
        deletePost={deletePost}
      />
    } else if (currentUser.username === board.username) {
      postMenu = <PostMenu
        currentUser={currentUser}
        post={post}
        deletePost={deletePost}
      />
    }
    
    const comments = Object.values(getState().entities.comments)
      .filter( comment => comment.post_id == post.id);
    const hidden = this.state.hideComments ? 'hidden' : '';

    let commentDetails;
    if (comments.length) {
      commentDetails = (
        <div className="post details comments container">
          <div className="post details comments count container">
            <button
              onClick={this.handleHideComments}
            >
              { comments.length } comments
            </button>
          </div>
        </div>
      );
    }

    const postInteraction = (
      <div className="post interaction container">
        <div className="post interaction buttons-container">
          <div className="post interaction button-container">
            <a>
              Like
            </a>
          </div>

          <div className="post interaction button-container">
            <a
              href={`#comment-form-input${post.id}`}
              onClick={ 
                (e) => {
                  e.preventDefault();
                  $(`#comment-form-input${post.id}`).focus()
                }
              }
            >
              Comment
            </a>
          </div>
        </div>
      </div>
    );
      
    return (
      <li className="post item-container">
        <div className="post item box">
          { postMenu }
          <div className="post item header">
            { authorName } {' > '} { boardName }
          </div>

          <div className="post item body">
            {post.body}
          </div>
        </div>

        <div className="post details">
          { commentDetails }
          { postInteraction }
        </div>

        <div className={`comment container ${hidden}`}>
          <CommentsContainer
            post={post}
            comments={comments}
          />
        </div>
      </li>
    );
  }
}

// const PostItem = ({currentUser, author, board, post, setPost, deletePost}) => {
//   const authorName = author.fname + ' ' + author.lname
//   const boardName = board.fname + ' ' + board.lname

//   let postMenu;
//   if (currentUser.username === author.username) {
//     postMenu = <PostMenu
//       currentUser={currentUser}
//       post={post}
//       setPost={setPost}
//       deletePost={deletePost}
//     />
//   } else if (currentUser.username === board.username) {
//     postMenu = <PostMenu
//       currentUser={currentUser}
//       post={post}
//       deletePost={deletePost}
//     />
//   }
  
//   const comments = Object.values(getState().entities.comments)
//     .filter( comment => comment.post_id == post.id);

//   let commentDetails;
//   if (comments.length) {
//     commentDetails = (
//       <div className="post details comments container">
//         <div className="post details comments count">
//           { comments.length } comments
//         </div>
//       </div>
//     );
//   }

//   const postInteraction = (
//     <div className="post interaction container">
//       <div className="post interaction buttons-container">
//         <div className="post interaction button-container">
//           <a>
//             Like
//           </a>
//         </div>

//         <div className="post interaction button-container">
//           <a
//             href={`#comment-form-input${post.id}`}
//             onClick={ 
//               (e) => {
//                 e.preventDefault();
//                 $(`#comment-form-input${post.id}`).focus()
//               }
//             }
//           >
//             Comment
//           </a>
//         </div>
//       </div>
//     </div>
//   );
    
//   return (
//     <li className="post item-container">
//       <div className="post item box">
//         { postMenu }
//         <div className="post item header">
//           { authorName } {' > '} { boardName }
//         </div>

//         <div className="post item body">
//           {post.body}
//         </div>
//       </div>

//       <div className="post details">
//         { commentDetails }
//         { postInteraction }
//       </div>

//       <div className="comment container">
//         <CommentsContainer
//           hideComments={hideComments}
//           post={post}
//           comments={comments}
//         />
//       </div>
//     </li>
//   );
// };

// export default PostItem;