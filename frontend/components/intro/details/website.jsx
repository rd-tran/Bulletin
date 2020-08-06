import React from 'react';

function Website({ website }) {  
  if (!website) return null;
  
  return (
    <div className="details website">
      {website}
    </div>
  )
}

export default Website;