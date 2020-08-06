import React from 'react';

function DetailItem({ detail }) {  
  if (!detail.data) return null;
  
  return (
    <div className={`detail ${detail.name}`}>
      {detail.data}
    </div>
  )
}

export default DetailItem;