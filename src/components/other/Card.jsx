import React, { useState } from 'react';
import { formatCardNumber, hideCardNumber,calculateBalance } from 'utils/CardUtils';
import './Card.css'



function Card(card) {
  // State to toggle the display of the full card number
  const [showCardNum, setShowCardNum] = useState(false);
  // State to toggle the display of the CVV
  const [showCardCvv, setShowCardCvv] = useState(false);

  // Handler to toggle the card number display
  function handleShowCardNum() {
    setShowCardNum(isCardNumShown => !isCardNumShown);
  }

  // Handler to toggle the CVV display
  function handleShowCardCvv() {
    setShowCardCvv(isCardCvvShown => !isCardCvvShown);
  }

  return (
    <div className={`card  bg-card-${card.color}`}>
      <div className="top">
        <div className="left">
          {/* Bank logo */}
          <img src={require("assets/images/BTC.png")} alt="TD" />
          <h2><strong>{card.name}</strong></h2>

        </div>
        {/* Card provider logo */}
        <img src={require(`assets/images/${card.provider}.png`)} alt="provider" className="right" />
      </div>

      <div className="middle">
        <div onClick={handleShowCardNum}>
          {/* Display either the formatted or masked card number based on the state */}
          <h3 className="card-number">{showCardNum ? formatCardNumber(card.number) : hideCardNumber(card.number)}</h3>
          <h2><strong>${card.balance.toLocaleString()}</strong></h2>
        </div>

        {/* Card chip image */}
        <div className="chip">
          <img src={require("assets/images/card chip.png")} alt="chip" className="chip" />
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <small>Card Holder</small>
          <h5>{card.holder}</h5>
        </div>
        <div className="right">
          <div className="expiry">
            <small>Expiry</small>
            <h5>{card.expiryDate}</h5>
          </div>

          {/* CVV section, toggle display of CVV number on click */}
          <div onClick={handleShowCardCvv} className="cvv">
            <small>CVV</small>
            <h5>{showCardCvv ? card.cvv : "***"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
