import React from 'react';
import Bio from './bio';

function BioContainer({ user }) {
  return (
    <div className="bio-container">
      <Bio bio={user.bio}/>
      <button className="intro-edit-button">Edit Bio</button>
    </div>
  )
}

export default BioContainer;