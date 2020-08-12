import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const PhotoItem = ({ photo }) => {
  return (
    <li className="photo-item">
      <Link to={`/u/${photo.url}`}
        className="profile-picture-container"
      >
        <img className="photo"></img>
      </Link>
    </li>
  );
};

export default withRouter(PhotoItem);