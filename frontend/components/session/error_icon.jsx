import React from 'react';

const ErrorIcon = ({ formType, inputType, active, showError }) => {
  return (
    <div
      className={`${formType} ${inputType} error-icon ${active}`}
      onClick={showError}>
    </div>
  );
}

export default ErrorIcon;