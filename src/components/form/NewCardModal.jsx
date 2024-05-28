import React from 'react';
import './NewCardModal.css'
function NewCardModal() {
  return (


    <dialog className='new-card-modal'open>

      <form class="card-form">
        <h2>Add New Card</h2>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" required />
        </div>
        <div class="form-group">
          <label for="cardholder-name">Cardholder Name</label>
          <input type="text" id="cardholder-name" name="cardholder-name" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input type="password" id="cvv" name="cvv" required />
          </div>
        </div>
        <button type="submit">Add Card</button>
      </form>
      
    </dialog>

  );
}

export default NewCardModal;