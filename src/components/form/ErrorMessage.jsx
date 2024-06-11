import React from 'react';

function ErrorMessage({ message, onClose }) {
  return (
    <div>
      {message}
      <button onClick={onClose} className='form-button'>OK</button>

    </div>
  );
}

export default ErrorMessage;