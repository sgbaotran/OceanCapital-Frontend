import React from 'react';
import './NewTransactionButton.css'

function NewTransactionButton({ handleOnOpen }) {
  return (
    <button onClick={handleOnOpen} className="new-transaction-button">
      {/* Button icon for adding a new card */}
      <img className='plus-sign' src={require("assets/images/plus-sign.png")} alt='plus sign' />
    </button>
  );
}

export default NewTransactionButton;