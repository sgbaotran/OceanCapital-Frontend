import { forwardRef, useRef } from 'react';
import './NewCardModal.css'

const NewCardModal = forwardRef(function NewCardModal({ handleOnClose }, ref) {
  const cardNumber = useRef()
  const cardHolder = useRef()
  const cardExpiryDate = useRef()
  const cardCvv = useRef()

  function validateCardNumber() { }

  function validateCardExpiryDate() { }

  function validateCardCvv() { }

  return (


    <dialog ref={ref} onClose={handleOnClose} className='new-card-modal' >

      <form class="card-form">
        <h2>Add New Card</h2>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input ref={cardNumber} type="text" id="card-number" name="card-number" maxLength={19} required />
        </div>
        <div class="form-group">
          <label for="cardholder-name">Cardholder Name</label>
          <input ref={cardHolder} type="text" id="cardholder-name" name="cardholder-name" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="expiry-date">Expiry Date</label>
            <input ref={cardExpiryDate} type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required maxLength={5} />
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input ref={cardCvv} type="password" id="cvv" name="cvv" required maxLength={3} />
          </div>
        </div>
        <button type="submit">Add Card</button>
      </form>

    </dialog>

  );
})

export default NewCardModal;