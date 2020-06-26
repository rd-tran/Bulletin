import React from 'react';

const ErrorIcon = ({ type, active, showError }) => {
  return (
    <div className={`${type} error-icon ${active}`} onClick={showError}>
    </div>
  );
}

export default ErrorIcon;