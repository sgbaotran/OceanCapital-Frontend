import React from 'react';
import './Card.css'


function addDotEveryFourChars(str) {
  return str.match(/.{1,4}/g).join(' ');
}

function Card({ bankName, cardNumber, balance, cardHolder, expiryDate, cvv }) {
  return (
    <div className="card">
      <div className="top">
        <div className="left">
          <img src={require("assets/images/BTC.png")} alt="something" />
          <h2><strong>{bankName}</strong></h2>
        </div>
        <img src={require("assets/images/visa.png")} alt="something" className="right" />
      </div>

      <div className="middle">
        <div>
          <h3>{addDotEveryFourChars(cardNumber)}</h3>
          <h2><strong>${balance.toLocaleString()}</strong></h2>

        </div>
        <div className="chip">
          <img src={require("assets/images/card chip.png")} alt="something" className="chip" />
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

          <div className="cvv">
            <small>CVV</small>
            <h5>{cvv}</h5>
          </div>
        </div>
      </div>

    </div>
  );


}

export default Card;
