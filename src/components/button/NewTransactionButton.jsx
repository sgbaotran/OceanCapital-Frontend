import React from 'react';
import './NewTransactionButton.css'

function NewTransactionButton({ handleOnOpen }) {
  return (
    <div onClick={handleOnOpen} className="new-transaction-button">
      <img src={require("assets/images/plus-sign.png")} alt='plus sign' />

    </div>
  );
}

export default NewTransactionButton;