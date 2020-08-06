import React from 'react';

function Hometown({ hometown }) {  
  if (!hometown) return null;
  
  return (
    <div className="details hometown">
      {hometown}
    </div>
  )
}

export default Hometown;