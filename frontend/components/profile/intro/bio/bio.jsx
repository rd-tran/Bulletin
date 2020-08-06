import React from 'react';

function Bio({ bio }) {  
  if (!bio) return null;
  
  return (
    <div className="intro-bio">
      {bio}
    </div>
  )
}

export default Bio;