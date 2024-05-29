import React from 'react';
import './Investment.css'

function Invesment({ title, price, quantity, diffPercentage, isGain }) {
  return (
    <div className="investment">
      <img src={require("assets/images/uniliver.png")} alt="" />
      <h4 className="">{title}</h4>
      <div className="date-time">
        <p>2 Dec, 2021</p>
        <small className="text-muted">9:14pm</small>
      </div>
      <div className="bonds">
        <p>{quantity}</p>
        <small className="text-muted">Bonds</small>
      </div>
      <div className="amount">
        <h4>${price}</h4>
        <small className={isGain ? 'success' : 'danger'}>
          {isGain ? '+' : '-'}{diffPercentage}%
        </small>
      </div>
    </div>
  );
}

export default Invesment;