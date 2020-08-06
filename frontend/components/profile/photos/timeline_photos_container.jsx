import React from 'react';

function TimelinePhotosContainer({ user }) {  
  console.log(user);

  return (
    <div className="photos-container">
      <div className="header-container">
        <div className="photo-icon"></div>
        <span className="header">Photos</span>
      </div>
    </div>
  )
}

export default TimelinePhotosContainer;