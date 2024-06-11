import React, { useState, useRef, useContext } from 'react';
import './NewCard.css'
import './Form.css'
import BankingContext from 'store/banking-context';
import Card from 'models/CardModel';
import { CARD_COLORS } from 'sample-data/model';

function NewCard({ onClose }) {
  const { addCard } = useContext(BankingContext)

  
  const cardNumber = useRef();
  const cardHolder = useRef();
  const cardExpiryDate = useRef();
  const cardCvv = useRef();
  const cardProvider = useRef(); // Unique ref for provider select element
  const cardBank = useRef(); // Ref for bank name
  const [cardColor, setCardColor] = useState("warm-red");

  function checkCardNumber(number) {
    const cardNumberRegex = /^\d+$/;
    return number.length !== 16 && !cardNumberRegex.test(number);
  }

  function checkExpiryDate(date) {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return !expiryDateRegex.test(date);
  };

  const [didEdit, setDidEdit] = useState({
    cardNumber: false,
    cardExpiryDate: false
  })

  const isCardInvalid = didEdit.cardNumber && checkCardNumber(cardNumber.current.value)
  
  const isDateInvalid = didEdit.cardExpiryDate && checkExpiryDate(cardExpiryDate.current.value)

  function handleInputBlur(key) {
    setDidEdit(prevEdit => ({ ...prevEdit, [key]: true }));
  }



  function chooseCardColor(colorName) {
    setCardColor(colorName);
  }

  function handleAddCard(event) {
    const card = new Card(
      cardBank.current.value,
      cardNumber.current.value,
      1000,
      cardHolder.current.value,
      '11/22',
      cardCvv.current.value,
      cardColor,
      cardProvider.current.value // Correctly pass provider value
    );
    addCard(card)
    event.target.reset()
    onClose()
  }

  return (

    <form onSubmit={handleAddCard} className='card-form'>

      <div className="form-group">
        <label htmlFor="bank-name">Bank Name</label>
        <input ref={cardBank} type="text" id="bank-name" name="bank-name" required />
      </div>

      <div className="form-group">
        <label htmlFor="card-number">Card Number</label>
        <input ref={cardNumber} onChange={() => handleInputBlur('cardNumber')} onBlur={() => handleInputBlur('cardNumber')} type="text" id="card-number" name="card-number" maxLength={16} required />
        {isCardInvalid && <span className='form-error-message'>Invalid Number</span>}
      </div>

      <div className="form-group">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input ref={cardHolder} type="text" id="cardholder-name" name="cardholder-name" required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input ref={cardExpiryDate} onBlur={() => handleInputBlur('cardExpiryDate')} type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxLength={5} />
          <span className='form-error-message'>{isDateInvalid && 'Invalid Date'}</span>
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input ref={cardCvv} type="password" id="cvv" name="cvv" required maxLength={3} />
        </div>

        <div className="form-group">
          <label htmlFor="provider">Provider</label>
          <select ref={cardProvider} id="provider" name="provider" required>
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
              onClick={() => chooseCardColor(color)}
              key={color}
              className={`card-color-select ${cardColor === color ? 'active' : ''} bg-card-${color}`}
            ></div>
          ))}
        </div>
      </div>

      <button disabled={isCardInvalid || isDateInvalid} className={`form-button ${(isCardInvalid || isDateInvalid) ? 'disabled' : ''}`} >Add Card</button>


    </form >

  );
}

export default NewCard;