import React, { useState } from 'react';
import './Card.css'

// Function to format the card number by grouping digits in sets of 4
function formatCardNumber(str) {
  return str.match(/.{1,4}/g).join(' ');
}

// Function to mask the card number, showing only the last 4 digits
function hideCardNumber(str) {
  return "**** **** **** " + str.slice(-4);
}

function Card({ bankName, cardNumber, balance, cardHolder, expiryDate, cvv }) {
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
    <div className="card">
      <div className="top">
        <div className="left">
          {/* Bank logo */}
          <img src={require("assets/images/BTC.png")} alt="bank logo" />
          <h2><strong>{bankName}</strong></h2>
        </div>
        {/* Card provider logo */}
        <img src={require("assets/images/visa.png")} alt="provider" className="right" />
      </div>

      <div className="middle">
        <div onClick={handleShowCardNum}>
          {/* Display either the formatted or masked card number based on the state */}
          <h3 className="card-number">{showCardNum ? formatCardNumber(cardNumber) : hideCardNumber(cardNumber)}</h3>
          <h2><strong>${balance.toLocaleString()}</strong></h2>
        </div>

        {/* Card chip image */}
        <div className="chip">
          <img src={require("assets/images/card chip.png")} alt="chip" className="chip" />
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <small>Card Holder</small>
          <h5>{cardHolder}</h5>
        </div>
        <div className="right">
          <div className="expiry">
            <small>Expiry</small>
            <h5>{expiryDate}</h5>
          </div>

          {/* CVV section, toggle display of CVV number on click */}
          <div onClick={handleShowCardCvv} className="cvv">
            <small>CVV</small>
            <h5>{showCardCvv ? cvv : "***"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
