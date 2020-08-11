import React from 'react';
import AboutContainer from '../about/about_container';
import FriendsContainer from '../friends/friends_container';
import PhotosContainer from '../photos/photos_container';

const MedleyContainer = () => {
  return (
    <div className="medley-container">
      <AboutContainer/>
      <FriendsContainer/>
      <PhotosContainer/>
    </div>
  );
};

export default MedleyContainer;