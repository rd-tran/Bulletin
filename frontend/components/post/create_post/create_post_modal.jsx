import React from 'react';

export default class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_username: this.props.currentUser.username,
      board_username: this.props.board.username,
      body: this.props.body,
      photoFile: this.props.photoFile,
      photoUrl: this.props.photoUrl,
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
      formData.append('post[photo]', this.state.photoFile);
    }
      
    this.props.createPost(formData);
    this.props.setBody('');
    this.props.closeModal();
  }

  render() {
    const preview = this.state.photoUrl ? 
            <img src={this.state.photoUrl} className="post-form photo"/> : null
    
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
            {preview}
          </div>
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