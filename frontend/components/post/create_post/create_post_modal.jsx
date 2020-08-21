import React from 'react';
import PostPhoto from '../post_photo/post_photo';

export default class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.currentUser.username,
      board_username: this.props.board.username,
      body: this.props.body,
      darken: '',
      disabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(type) {
    return (e) => {
      if (e.target.value.length) {
        this.setState({ [type]: e.target.value, disabled: false }, () => {
          this.props.setBody(this.state.body)
        })
      } else {
        this.setState({ [type]: e.target.text, disabled: true })
      }
    };
  }

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const post = ( ({author_username, board_username, body}) => (
    //   {author_username, board_username, body}
    // ))(this.state);
    const formData = new FormData();
    formData.append('post[author_username]', this.state.author_username);
    formData.append('post[board_username]', this.state.board_username);
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.props.photoFile);
    }
      
    this.props.createPost(formData);
    this.props.setBody('');
    this.props.closeModal();
  }

  render() {
    const photoActive = this.props.photoUrl ? 'active' : '';
    // console.log(this.props.photoUrl ? 'Attached' : 'Not Attached')
    return (
      <form onSubmit={this.handleSubmit} className="post-form form">
        <div className="post-form details">
          <div className="post-form profile-picture"></div>
          
          <div className="post-form body-container">
            <textarea type="text"
              value={this.state.body}
              placeholder={
                this.state.photoFile ? 'Say something about this photo...' :
                                   "What's on your mind?"
              }
              className="post-form body create"
              onChange={this.handleChange('body')}
            />
          </div>
        </div>

        <PostPhoto photoUrl={this.props.photoUrl} setFile={this.props.setFile}/>
        
        <div className="post-form photo-input-container">
          <input type="file"
            id="photo-input"
            onChange={(e) => this.props.setFile(e)}
          />
          <label htmlFor="photo-input"
            className={`post-form photo-upload ${photoActive}`}
          >
            <div className="post-form photo-icon"></div>
            <div className="post-form photo-text">Photo</div>
          </label>
        </div>
        
        <div className="post-form button-container">
          <button
            className="post-form button"
            disabled={this.state.disabled}
          >Post</button>
        </div>
      </form>
    );
  }
}