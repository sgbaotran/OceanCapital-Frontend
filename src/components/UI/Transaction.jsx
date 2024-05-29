import React from 'react';
import './Transaction.css'

function Transaction() {
  return (
    <div className="transaction">
      <div className="service">
        <div className="icon bg-purple-light purple-light">
          <span className='material-icons-sharp'>shopping_bag</span>
        </div>
        <div className="details">
          <h4>Music</h4>
          <p>20.11.2024</p>
        </div>
      </div>

      <div className="card-details">
        <div className="card bg-danger">
          <img src={require("assets/images/visa.png")} alt="" />
        </div>
        <div className="details">
          <p>*2757</p>
          <small className="text-muted">Credit Card</small>
        </div>
      </div>
      <h4>$20</h4>
    </div>
  );
}

export default Transaction;