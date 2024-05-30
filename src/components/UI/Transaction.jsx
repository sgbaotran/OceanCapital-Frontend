import React from 'react';
import './Transaction.css'

function Transaction(transaction) {
  return (
    <div className="transaction">
      <div className="service">
        <div className="icon bg-purple-light purple-light">
          <span className='material-icons-sharp'>shopping_bag</span>
        </div>
        <div className="details">
          <h4>{transaction.title}</h4>
          <p>{transaction.date}</p>
        </div>
      </div>

      <div className="card-details">
        <div className="card bg-danger">
          <img src={require("assets/images/visa.png")} alt="" />
        </div>
        <div className="details">
          <p>*{transaction.fromAccount.slice(-4)}</p>
          {/* <small className="text-muted">{cardType} Card</small> */}
        </div>
      </div>
      <h4>${transaction.amount}</h4>
    </div>
  );
}

export default Transaction;