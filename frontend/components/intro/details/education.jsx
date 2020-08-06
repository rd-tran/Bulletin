import React from 'react';

function Education({ education }) {  
  if (!education) return null;
  
  return (
    <div className="details education">
      {education}
    </div>
  )
}

export default Education;