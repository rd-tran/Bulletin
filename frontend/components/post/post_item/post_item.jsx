import React from 'react';
import { Link } from 'react-router-dom';
import PostMenu from '../post_menu/post_menu';
import CommentsContainer from '../../comments/comments_container';

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
    const {currentUser, author, board, post, comments, setPost, deletePost} = this.props;

    const authorName = author.fname + ' ' + author.lname
    const boardName = board.fname + ' ' + board.lname

    let postHeader;
    if (author.username === board.username) {
      postHeader = (
        <div className="post item header">
          <Link
            to={`/u/${author.username}`}
            className="something"
          >
            { authorName }
          </Link>
        </div>
      );
    } else {
      postHeader = (
        <div className="post item header">
          <Link
            to={`/u/${author.username}`}
            className="something"
          >
            { authorName }
          </Link>

          <div className="post item header-separator"></div>
          <Link
            to={`/u/${author.username}`}
            className="something"
          >
            { boardName }
          </Link>
        </div>
      );
    }

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

    const dateTime = new Date(`${post.created_at}`);
    const [_, month, zeroPaddedDay, year] = dateTime.toDateString().split(' ');
    const day = zeroPaddedDay < 10 ? zeroPaddedDay[1] : zeroPaddedDay;
    const hours = ((dateTime.getHours() + 11) % 12) + 1;
    const minutes = dateTime.getMinutes();
    const zeroPaddedMin = minutes < 10 ? `0${minutes}` : minutes
    const meridiem = dateTime.getHours() < 12 ? 'AM' : 'PM';
    const formattedDate = 
      `${month} ${day} ${year} at ${hours}:${zeroPaddedMin} ${meridiem}`;
    
    return (
      <li className="post item-container">
        <div className="post item box">
          { postMenu }

          <div className="post item header-details">
            <div className="post item profile-picture"></div>
            <div className="post item header-container">
                { postHeader }
              <div className="post item date">
                { formattedDate }
              </div>
            </div>
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