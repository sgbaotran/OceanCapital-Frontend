import React, { useState } from 'react';
import './Card.css'




function formatCardNumber(str) {
  return str.match(/.{1,4}/g).join(' ');
}

function hideCardNumber(str) {
  return "**** **** **** " + str.slice(-4);;
}


function Card({ bankName, cardNumber, balance, cardHolder, expiryDate, cvv }) {
  const [showCardNum, setShowCardNnum] = useState(false)
  const [showCardCvv, setShowCardCvv] = useState(false)


  function handleShowCardNum() {
    setShowCardNnum(isCardNumShown => !isCardNumShown)
  }

  function handleShowCardCvv() {
    setShowCardCvv(isCardCvvShown => !isCardCvvShown)
  }


  return (
    <div className="card">
      <div className="top">
        <div className="left">
          <img src={require("assets/images/BTC.png")} alt="bank logo" />
          <h2><strong>{bankName}</strong></h2>
        </div>
        <img src={require("assets/images/visa.png")} alt="provider" className="right" />
      </div>

      <div className="middle">
        <div onClick={handleShowCardNum}>
          <h3 className="card-number" >{showCardNum ? formatCardNumber(cardNumber) : hideCardNumber(cardNumber)}</h3>
          <h2><strong>${balance.toLocaleString()}</strong></h2>
        </div>

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

          <div onClick={handleShowCardCvv} className="cvv">
            <small >CVV</small>
            <h5 >{showCardCvv ? cvv : "***"}</h5>
          </div>
        </div>
      </div>

    </div>
  );


}

export default Card;
