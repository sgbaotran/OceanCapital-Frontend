import React, { useState, useRef } from 'react';

import './NewTransaction.css'
import './Form.css'
import { getTodayDate } from 'utils/other';
import { useDispatch, useSelector } from 'react-redux';
import { appAction } from 'store';


function NewTransaction({ onClose }) {

  const cards = useSelector((state) => (state.app.cards))

  const fromAccount = useRef()

  const [newTransaction, setNewTransaction] = useState({
    amount: 0, title: '', date: '', fromAccount: cards[0].number
  })

  const [didEdit, setDidEdit] = useState({
    amount: false, fromAccount: false
  })


  const dispatch = useDispatch()

  const isCardInvalid = cards.length === 0 || (didEdit.fromAccount && !checkCardBalance())

  function handleInputBlur(key) {
    setDidEdit(prevEdit => ({ ...prevEdit, [key]: true }));
  }

  function handleInputChange(key, event) {
    setNewTransaction(transaction => {
      return { ...transaction, [key]: event.target.value }
    })
  }

  function checkCardBalance() {
    const currentCard = cards.find(card => card.number === newTransaction['fromAccount']);
    return currentCard.balance >= newTransaction['amount']
  }

  function handleAddTransaction(event) {
    dispatch(appAction.addTransaction(newTransaction))
    event.target.reset()
    onClose();
  }

  return (

    <form onSubmit={handleAddTransaction} className="transaction-form">

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input onChange={(event) => handleInputChange('amount', event)} onBlur={() => handleInputBlur('amount')} type="number" id="amount" name="amount" required />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input onChange={(event) => handleInputChange('title', event)} type="text" id="title" name="title" required />
      </div>


      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input defaultValue={getTodayDate()} onChange={(event) => handleInputChange('date', event)} type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="from-account">From account</label>
          <select ref={fromAccount} onChange={(event) => handleInputChange('fromAccount', event)} onBlur={() => handleInputBlur('fromAccount')} id="from-account" name="from-account" required>
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