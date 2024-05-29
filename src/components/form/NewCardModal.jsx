import { forwardRef, useRef } from 'react';
import './NewCardModal.css'

const NewCardModal = forwardRef(function NewCardModal({ handleOnClose, handleAddCard }, ref) {
  const cardNumber = useRef()
  const cardHolder = useRef()
  const cardExpiryDate = useRef()
  const cardCvv = useRef()


  function onAdd() {

    const card = {
      cardNumber: cardNumber.current.value,
      cardHolder: cardHolder.current.value,
      expiryDate: cardExpiryDate.current.value,
      cvv: cardCvv.current.value,
    }
    handleAddCard(card)
    handleOnClose()
  }


  // function validateCardNumber() { }

  // function validateCardExpiryDate() { }

  // function validateCardCvv() { }

  return (


    <dialog ref={ref} onClose={handleOnClose} className='new-card-modal' >

      <div className="card-form">
        <h2>Add New Card</h2>
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
        </div>
        <button onClick={onAdd}>Add Card</button>
      </div>

    </dialog>

  );
})

export default NewCardModal;