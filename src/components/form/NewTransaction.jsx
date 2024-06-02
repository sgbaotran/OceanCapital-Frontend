import React, { useRef, useContext } from 'react';
import BankingContext from 'store/banking-context';
import Transaction from 'models/TransactionModel';
import './NewTransaction.css'
import './Form.css'


function NewTransaction({ closeModal }) {

  const { cards, addTransaction } = useContext(BankingContext)

  const transactionAmount = useRef();
  const transactionTitle = useRef();
  const transactionAccount = useRef();

  function resetInputs() {
    if (transactionAmount.current) transactionAmount.current.value = '';
    if (transactionTitle.current) transactionTitle.current.value = '';
    if (transactionAccount.current) transactionAccount.current.value = '';
  }



  function handleAddTransaction() {
    const transaction = new Transaction(
      transactionAmount.current.value,
      transactionTitle.current.value,
      '01/06/2024',
      transactionAccount.current.value,
    );
    addTransaction(transaction);
    resetInputs()
    closeModal();
  }


  return (

    <form className="transaction-form">

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input ref={transactionAmount} type="number" id="amount" name="amount" required />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input ref={transactionTitle} type="text" id="title" name="title" required />
      </div>


      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="from-account">From account</label>
          <select ref={transactionAccount} id="from-account" name="from-account" required>
            {cards.map(card => (
              <option value={card.number}>*{card.number.slice(-4)}</option>
            ))}
          </select>
        </div>
        
      </div>

      <button type='button' onClick={handleAddTransaction} className="form-button disabled">Add Transaction</button>

    </form>


  );
}

export default NewTransaction;