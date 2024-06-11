import React, { useState, useContext } from 'react';
import './NewCard.css'
import './Form.css'
import BankingContext from 'store/banking-context';
import Card from 'models/CardModel';
import { CARD_COLORS } from 'sample-data/model';

function NewCard({ onClose }) {

  const { addCard } = useContext(BankingContext)
  const [newCard, setNewCard] = useState({
    bank: '', number: '', balance: 0, holder: '', expiryDate: '', cvv: '', color: "warm-red", provider: 'visa',
  })
  const [didEdit, setDidEdit] = useState({
    number: false, expiryDate: false, cvv: false,
  })


  function checkCardNumber(number) {
    const cardNumberRegex = /^\d+$/;
    return number.length !== 16 || !cardNumberRegex.test(number);
  }

  function checkExpiryDate(date) {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return !expiryDateRegex.test(date);
  };

  const isCardInvalid = didEdit.number && checkCardNumber(newCard['number'])

  const isDateInvalid = didEdit.expiryDate && checkExpiryDate(newCard['expiryDate'])

  function handleInputBlur(key) {
    setDidEdit(prevEdit => ({ ...prevEdit, [key]: true }));
  }

  function handleInputChange(key, event) {
    setNewCard(card => {
      return { ...card, [key]: event.target.value }
    })
  }

  function handleChooseCardColor(colorName) {
    setNewCard(card => {
      return { ...card, 'color': colorName }
    })
  }

  function handleAddCard(event) {
    event.preventDefault()
    const card = new Card({ ...newCard });
    addCard(card)
    onClose()
    event.target.reset()
  }

  return (

    <form onSubmit={handleAddCard} className='card-form'>

      <div className="form-group">
        <label htmlFor="bank-name">Bank Name</label>
        <input onChange={(event) => handleInputChange('bank', event)} type="text" id="bank-name" name="bank-name" required />
      </div>

      <div className="form-group">
        <label htmlFor="card-number">Card Number</label>
        <input onBlur={() => handleInputBlur('number')} onChange={(event) => handleInputChange('number', event)} type="text" id="card-number" name="card-number" maxLength={16} required />
        {isCardInvalid && <span className='form-error-message'>Invalid Number</span>}
      </div>

      <div className="form-group">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input onChange={(event) => handleInputChange('holder', event)} type="text" id="cardholder-name" name="cardholder-name" required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input onBlur={() => handleInputBlur('expiryDate')} onChange={(event) => handleInputChange('expiryDate', event)} id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxLength={5} />
          {isDateInvalid && <span className='form-error-message'>Invalid Date</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input onChange={(event) => handleInputChange('cvv', event)} type="password" id="cvv" name="cvv" required maxLength={3} />
        </div>

        <div className="form-group">
          <label htmlFor="provider">Provider</label>
          <select onChange={(event) => handleInputChange('provider', event)} id="provider" name="provider" required>
            <option value="visa">Visa</option>
            <option value="master-card">Master Card</option>
          </select>
        </div>

      </div>

      <div className="form-group">
        <label htmlFor="card-color">Select Card Color</label>
        <div className='card-color-selections'>
          {CARD_COLORS.map(color => (
            <div
              onClick={() => handleChooseCardColor(color)}
              key={color}
              className={`card-color-select ${newCard['color'] === color ? 'active' : ''} bg-card-${color}`}
            ></div>
          ))}
        </div>
      </div>


      <button disabled={isCardInvalid} className={`form-button ${isCardInvalid || isDateInvalid ? 'disabled' : ''}`}>Add Card</button>


    </form >

  );
}

export default NewCard;