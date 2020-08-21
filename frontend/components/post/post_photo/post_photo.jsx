import React, { useState } from 'react';

export default function PostPhoto({ photoUrl, setFile }) {
  const [darken, setDarken] = useState('');
  const photoInput = document.getElementById('photo-input');
  if (photoUrl) {
    return (
      <div className="post-form photo-container"
        onMouseEnter={() => setDarken('darken')}
        onMouseLeave={() => setDarken('')}
      >
        <div className={`post-form remove-photo ${darken}`}
          onClick={() => {
            photoInput.value = null;
            setFile()
          }}
        >
        </div>

        <img src={photoUrl} className={`post-form photo ${darken}`}/>
      </div>
    );
  }

  return null;
}