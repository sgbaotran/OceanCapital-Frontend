import { forwardRef, useRef, useState, useEffect } from 'react';
import './NewCardModal.css';
import { CARD_COLORS } from 'test/model';
import Card from 'models/CardModel';

const NewCardModal = forwardRef(function NewCardModal({ handleOnClose, handleAddCard }, ref) {
  const cardNumber = useRef();
  const cardHolder = useRef();
  const cardExpiryDate = useRef();
  const cardCvv = useRef();
  const cardProvider = useRef(); // Unique ref for provider select element
  const bankName = useRef(); // Ref for bank name
  const [cardColor, setCardColor]   = useState("warm-red");

  // Function to reset input values
  function resetInputs() {
    if (cardNumber.current) cardNumber.current.value = '';
    if (cardHolder.current) cardHolder.current.value = '';
    if (cardExpiryDate.current) cardExpiryDate.current.value = '';
    if (cardCvv.current) cardCvv.current.value = '';
    if (cardProvider.current) cardProvider.current.value = 'visa'; // Reset to default value
    if (bankName.current) bankName.current.value = ''; // Reset bank name
    setCardColor("warm-red");
  }

  function addCard() {
    const card = new Card(
      bankName.current.value,
      cardNumber.current.value,
      1000,
      cardHolder.current.value,
      cardExpiryDate.current.value,
      cardCvv.current.value,
      cardColor,
      cardProvider.current.value // Correctly pass provider value
    );
    handleAddCard(card);
    handleOnClose();
  }

  function chooseCardColor(colorName) {
    setCardColor(colorName);
  }

  // Listen for changes in handleOnClose and reset inputs
  useEffect(() => {
    resetInputs();
  }, [handleOnClose]);

  return (
    <dialog ref={ref} onClose={handleOnClose} className='new-card-modal'>
      <div className="card-form">
        <div className='card-form-header'>
          <h2>Add New Card</h2>
          <button onClick={handleOnClose} className="close-button">X</button>
        </div>

        <div className="form-group">
          <label htmlFor="bank-name">Bank Name</label>
          <input ref={bankName} type="text" id="bank-name" name="bank-name" required />
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
            <input ref={cardExpiryDate} type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxLength={5} />
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

        <button onClick={addCard} className="add-card-button">Add Card</button>
      </div>
    </dialog>
  );
});

export default NewCardModal;
