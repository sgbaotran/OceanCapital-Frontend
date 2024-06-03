import React, { useState, useRef, useContext, useEffect } from 'react';
import './NewCard.css'
import './Form.css'
import BankingContext from 'store/banking-context';
import Card from 'models/CardModel';
import { CARD_COLORS } from 'sample-data/model';

function NewCard({ closeModal }) {

  useEffect(() => {
    setTimeout(() => { console.log("TIMER START") },1000)
  }, [])

  const { addCard } = useContext(BankingContext)

  const cardNumber = useRef();
  const cardHolder = useRef();
  const cardExpiryDate = useRef();
  const cardCvv = useRef();
  const cardProvider = useRef(); // Unique ref for provider select element
  const cardBank = useRef(); // Ref for bank name
  const [cardColor, setCardColor] = useState("warm-red");

  function chooseCardColor(colorName) {
    setCardColor(colorName);
  }

  function resetInputs() {
    if (cardNumber.current) cardNumber.current.value = '';
    if (cardHolder.current) cardHolder.current.value = '';
    if (cardExpiryDate.current) cardExpiryDate.current.value = '';
    if (cardCvv.current) cardCvv.current.value = '';
    if (cardProvider.current) cardProvider.current.value = 'visa'; // Reset to default value
    if (cardBank.current) cardBank.current.value = ''; // Reset bank name
    setCardColor("warm-red");
  }

  function handleAddCard() {
    const card = new Card(
      cardBank.current.value,
      cardNumber.current.value,
      1000,
      cardHolder.current.value,
      '02/27',
      cardCvv.current.value,
      cardColor,
      cardProvider.current.value // Correctly pass provider value
    );

    addCard(card)
    closeModal()
    resetInputs()
  }

  return (

    <form className='card-form'>
      <div className="form-group">
        <label htmlFor="bank-name">Bank Name</label>
        <input ref={cardBank} type="text" id="bank-name" name="bank-name" required />
      </div>

      <div className="form-group">
        <label htmlFor="card-number">Card Number</label>
        <input ref={cardNumber} type="text" id="card-number" name="card-number" maxLength={19} required />
      </div>

      <div className="form-group">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input ref={cardHolder} type="text" id="cardholder-name" name="cardholder-name" required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxLength={5} />
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

      <button type="button" onClick={handleAddCard} className="form-button">Add Card</button>




    </form>

  );
}

export default NewCard;