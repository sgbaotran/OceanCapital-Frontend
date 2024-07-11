import React from 'react';
import './Investment.css';

function Investment({ title, price, quantity, diffPercentage, isGain }) {
  return (
    <div className="investment">
      <img src={require("assets/images/uniliver.png")} alt={title} className="investment-logo" />
      <div className="investment-title">{title}</div>
      <div className="date-time">
        <p>2 Dec, 2021</p>
        <small>9:14pm</small>
      </div>
      <div className="bonds">
        <p>{quantity}</p>
        <small>Bonds</small>
      </div>
      <div className="amount">
        <h4>${price}</h4>
        <small className={isGain ? 'text-success' : 'text-danger'}>
          {isGain ? '+' : '-'}{diffPercentage}%
        </small>
      </div>
    </div>
  );
}

export default Investment;
