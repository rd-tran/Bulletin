import React from 'react';

function NamePronunciation({ namePronunciation }) {  
  if (!namePronunciation) return null;
  
  return (
    <div className="details name-pronunciation">
      {namePronunciation}
    </div>
  )
}

export default NamePronunciation;