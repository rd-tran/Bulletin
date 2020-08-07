import React from 'react';

function Relationship({ relationship }) {  
  if (!relationship) return null;
  
  return (
    <div className="details relationship">
      {relationship}
    </div>
  )
}

export default Relationship;