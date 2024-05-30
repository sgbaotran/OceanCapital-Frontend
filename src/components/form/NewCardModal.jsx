import { forwardRef, useRef, useState, useEffect } from 'react';
import './NewCardModal.css'
import { CARD_COLORS } from 'test/model';
import Card from 'models/CardModel'

const NewCardModal = forwardRef(function NewCardModal({ handleOnClose, handleAddCard }, ref) {
  const cardNumber = useRef()
  const cardHolder = useRef()
  const cardExpiryDate = useRef()
  const cardCvv = useRef()
  const [cardColor, setCardColor] = useState("warm-red")


  // Function to reset input values
  function resetInputs() {
    if (cardNumber.current) cardNumber.current.value = '';
    if (cardHolder.current) cardHolder.current.value = '';
    if (cardExpiryDate.current) cardExpiryDate.current.value = '';
    if (cardCvv.current) cardCvv.current.value = '';
    setCardColor("warm-red");
  };


  function addCard() {

    const card = new Card(
      "TD",
      cardNumber.current.value,
      1000,
      cardHolder.current.value,
      cardExpiryDate.current.value,
      cardCvv.current.value,
      cardColor,
      "VISA"
    )
    handleAddCard(card)
    handleOnClose()
  }

  function chooseCardColor(colorName) {
    setCardColor(colorName)
  }

  // Listen for changes in handleOnClose and reset inputs
  useEffect(() => {
    resetInputs();
  }, [handleOnClose]);


  return (


    <dialog ref={ref} onClose={handleOnClose} className='new-card-modal' >

      <div className="card-form">
        
        <div className='card-form-header'>
          <h2>Add New Card</h2>
          <button onClick={handleOnClose }>X</button>
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
        </div>


        <div className="form-group">
          <label htmlFor="card-color">Select Card Color</label>
          <div className='card-color-selections'>

            {CARD_COLORS.map(color => (
              <div
                onClick={() => chooseCardColor(color)}
                key={color}
                className={`${cardColor === color ? 'active' : ''} card-color-select bg-card-${color}`}
              ></div>
            ))}

          </div>

        </div>

        <button onClick={addCard}>Add Card</button>
      </div>

    </dialog >

  );
})

export default NewCardModal;