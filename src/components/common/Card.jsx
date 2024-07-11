import React, { useState } from 'react';
import { formatCardNumber, hideCardNumber, formatCardBalance } from 'utils/cards';
import './Card.css';

function Card({card}) {
  const [showCardNum, setShowCardNum] = useState(false);
  const [showCardCvv, setShowCardCvv] = useState(false);

  const handleShowCardNum = () => setShowCardNum(prev => !prev);
  const handleShowCardCvv = () => setShowCardCvv(prev => !prev);

  return (
    <div className={`card bg-card-${card.color}`}>
      <CardTop bank={card.bank} provider={card.provider} />
      <CardMiddle
        showCardNum={showCardNum}
        handleShowCardNum={handleShowCardNum}
        cardNumber={card.number}
        cardBalance={card.balance}
      />
      <CardBottom
        holder={card.holder}
        expiryDate={card.expiryDate}
        showCardCvv={showCardCvv}
        handleShowCardCvv={handleShowCardCvv}
        cardCvv={card.cvv}
      />
    </div>
  );
}

const CardTop = ({ bank, provider }) => (
  <div className="card-top">
    <div className="card-left">
      <img className="card-bank-logo" src={require("assets/images/BTC.png")} alt="TD" />
      <h2 className="card-bank-name">{bank}</h2>
    </div>
    <img className="card-provider-logo" src={require(`assets/images/${provider}.png`)} alt="provider" />
  </div>
);

const CardMiddle = ({ showCardNum, handleShowCardNum, cardNumber, cardBalance }) => (
  <div className="card-middle" >

    <div onClick={handleShowCardNum}>
      <h3 className="card-number">{showCardNum ? formatCardNumber(cardNumber) : hideCardNumber(cardNumber)}</h3>
      <h2>${formatCardBalance(cardBalance)}</h2>
    </div>

    <div className="card-chip">
      <img src={require("assets/images/card chip.png")} alt="chip" />
    </div>

  </div>
);

const CardBottom = ({ holder, expiryDate, showCardCvv, handleShowCardCvv, cardCvv }) => (
  <div className="card-bottom">
    <div className="card-left">
      <small>Card Holder</small>
      <h5>{holder}</h5>
    </div>
    <div className="card-right">
      <div className="card-expiry">
        <small>Expiry</small>
        <h5>{expiryDate}</h5>
      </div>
      <div onClick={handleShowCardCvv} className="card-cvv">
        <small>CVV</small>
        <h5>{showCardCvv ? cardCvv : "***"}</h5>
      </div>
    </div>
  </div>
);

export default Card;
