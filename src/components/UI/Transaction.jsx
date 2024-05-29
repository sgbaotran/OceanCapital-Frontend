import React from 'react';
import './Transaction.css'

function Transaction({ title, date, cardType, cardNumber, amount }) {
  return (
    <div className="transaction">
      <div className="service">
        <div className="icon bg-purple-light purple-light">
          <span className='material-icons-sharp'>shopping_bag</span>
        </div>
        <div className="details">
          <h4>{title}</h4>
          <p>{date}</p>
        </div>
      </div>

      <div className="card-details">
        <div className="card bg-danger">
          <img src={require("assets/images/visa.png")} alt="" />
        </div>
        <div className="details">
          <p>*{cardNumber}</p>
          <small className="text-muted">{cardType} Card</small>
        </div>
      </div>
      <h4>${amount}</h4>
    </div>
  );
}

export default Transaction;