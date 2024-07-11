import React, { useState, useRef } from 'react';
import './TransactionForm.css';
import './Form.css';
import { getTodayDate } from 'utils/other';
import { useDispatch, useSelector } from 'react-redux';
import { appAction } from 'store';

function TransactionForm({ mode, onClose, onSubmit, selectedTransactions }) {
  const cards = useSelector((state) => state.app.cards);

  const expense_categories = useSelector((state) => state.app.expense_categories);

  const initialState = (mode === 'edit' && selectedTransactions.length === 1) ? selectedTransactions[0] : {
    amount: 0,
    title: '',
    date: getTodayDate(),
    account: cards[0],
    payee: '',
    category: expense_categories[0],
  }

  const account = useRef();

  const [transaction, setTransaction] = useState(initialState);

  const [didEdit, setDidEdit] = useState({ amount: false, account: false });

  const dispatch = useDispatch();

  const isCardInvalid = cards.length === 0 || (didEdit.account && !validateCardBalance());

  function handleInputBlur(key) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [key]: true }));
  }

  function handleInputChange(key, event) {
    setTransaction((transaction) => {
      return { ...transaction, [key]: event.target.value };
    });
  }

  function validateCardBalance() {
    const currentCard = cards.find((card) => card.number === transaction.account);
    return currentCard.balance >= transaction.amount;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (mode === 'add') {
      dispatch(appAction.addTransaction(transaction));
    } else {
      dispatch(appAction.editTransactions({ selectedTransactions, transaction }));

    }



    event.target.reset();
    onClose();
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          defaultValue={transaction.amount}
          onChange={(event) => handleInputChange('amount', event)}
          onBlur={() => handleInputBlur('amount')}
          type="number"
          id="amount"
          name="amount"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          defaultValue={transaction.title}

          onChange={(event) => handleInputChange('title', event)}
          type="text"
          id="title"
          name="title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="payee">Payee</label>
        <input
          defaultValue={transaction.payee}

          onChange={(event) => handleInputChange('payee', event)}
          type="text"
          id="payee"
          name="payee"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          onChange={(event) => handleInputChange('category', event)}
          id="category"
          name="category"
          required
        >
          {expense_categories.map((category) => (
            <option key={category.id} value={category}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            defaultValue={transaction.date}
            onChange={(event) => handleInputChange('date', event)}
            type="date"
            id="date"
            name="date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="from-account">From account</label>
          <select
            ref={account}
            onChange={(event) => handleInputChange('account', event)}
            onBlur={() => handleInputBlur('account')}
            id="from-account"
            name="from-account"
            required
          >
            {cards.map((card) => (
              <option key={card.number} value={card.number}>
                *{card.number.slice(-4)} - {card.provider}
              </option>
            ))}
          </select>

          {isCardInvalid && <span className="form-error-message">Insufficient Fund</span>}
        </div>
      </div>

      <button disabled={isCardInvalid} className={`form-button ${isCardInvalid ? 'disabled' : ''}`}>
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
