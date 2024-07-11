import React, { useRef, useContext, useState } from 'react';
import BankingContext from 'store/banking-context';
import Transaction from 'models/TransactionModel';
import './NewTransaction.css'
import './Form.css'


function NewTransaction({ onClose }) {

  const { cards, addTransaction } = useContext(BankingContext)


  const transactionAmount = useRef();
  const transactionTitle = useRef();
  const transactionAccount = useRef();

  const [isCardInvalid, setIsCardInvalid] = useState(false)


  function checkCardBalance() {
    const currentCard = cards.find(card => card.number === transactionAccount.current.value);
    return currentCard.balance >= transactionAmount.current.value
  }

  function handleInputBlur() {
    const isBalanceSufficient = checkCardBalance()
    setIsCardInvalid(!isBalanceSufficient)
  }

  function handleAddTransaction(event) {
    const transaction = new Transaction(
      transactionAmount.current.value,
      transactionTitle.current.value,
      '01/06/2024',
      transactionAccount.current.value,
    );
    addTransaction(transaction);
    event.target.reset()
    onClose();
  }

  return (

    <form onSubmit={handleAddTransaction} className="transaction-form">

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input onBlur={handleInputBlur} ref={transactionAmount} type="number" id="amount" name="amount" required />
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
          <select onBlur={handleInputBlur} ref={transactionAccount} id="from-account" name="from-account" required>
            {cards.map(card => (
              <option key={card.number} value={card.number}>*{card.number.slice(-4)}</option>
            ))}
          </select>

          {isCardInvalid && <span className='form-error-message'>Insufficient Fund</span>}

        </div>

      </div>

      <button disabled={isCardInvalid} className={`form-button ${isCardInvalid ? 'disabled' : ''}`}>Add Transaction</button>

    </form>


  );
}

export default NewTransaction;