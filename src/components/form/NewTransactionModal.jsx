import { forwardRef, useRef, useState, useEffect } from 'react';
import './NewTransactionModal.css';
import Transaction from 'models/TransactionModel';

const NewTransactionModal = forwardRef(function NewTransactionModal({ handleOnClose, handleAddTransaction }, ref) {
  const amountRef = useRef();
  const titleRef = useRef();
  const dateRef = useRef();
  const fromAccountRef = useRef();

  // Function to reset input values
  function resetInputs() {
    if (amountRef.current) amountRef.current.value = '';
    if (titleRef.current) titleRef.current.value = '';
    if (dateRef.current) dateRef.current.value = '';
    if (fromAccountRef.current) fromAccountRef.current.value = '';
  }

  function addTransaction() {
    const transaction = new Transaction(
      amountRef.current.value,
      titleRef.current.value,
      dateRef.current.value,
      fromAccountRef.current.value,
    );
    
    handleAddTransaction(transaction);
    handleOnClose();
  }

  // Listen for changes in handleOnClose and reset inputs
  useEffect(() => {
    resetInputs();
  }, [handleOnClose]);

  return (
    <dialog ref={ref} onClose={handleOnClose} className='new-transaction-modal'>
      <div className="new-transaction-form">
        <div className='new-transaction-form-header'>
          <h2>Add New Transaction</h2>
          <button onClick={handleOnClose} className="new-transaction-close-button">X</button>
        </div>

        <div className="new-transaction-form-group">
          <label htmlFor="amount">Amount</label>
          <input ref={amountRef} type="number" id="amount" name="amount" required />
        </div>
        <div className="new-transaction-form-group">
          <label htmlFor="title">Title</label>
          <input ref={titleRef} type="text" id="title" name="title" required />
        </div>
        <div className="new-transaction-form-group">
          <label htmlFor="date">Date</label>
          <input ref={dateRef} type="date" id="date" name="date" required />
        </div>
        <div className="new-transaction-form-group">
          <label htmlFor="from-account">From Account</label>
          <input ref={fromAccountRef} type="text" id="from-account" name="from-account" required />
        </div>

        <button onClick={addTransaction} className="new-transaction-add-button">Add Transaction</button>
      </div>
    </dialog>
  );
});

export default NewTransactionModal;
