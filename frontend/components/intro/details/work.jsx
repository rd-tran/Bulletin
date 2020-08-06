import React from 'react';

function Work({ work }) {  
  if (!work) return null;
  
  return (
    <div className="details work">
      {work}
    </div>
  )
}

export default Work;