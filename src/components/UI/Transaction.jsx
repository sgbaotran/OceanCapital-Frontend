import React from 'react';
import './Transaction.css'

function Transaction() {
  return (
    <div class="transaction">
      <div class="service">
        <div class="icon bg-purple-light purple-light">
          <span class='material-icons-sharp'>shopping_bag</span>
        </div>
        <div class="details">
          <h4>Music</h4>
          <p>20.11.2024</p>
        </div>
      </div>

      <div class="card-details">
        <div class="card bg-danger">
          <img src={require("assets/images/visa.png")} alt="" />
        </div>
        <div class="details">
          <p>*2757</p>
          <small class="text-muted">Credit Card</small>
        </div>
      </div>
      <h4>$20</h4>
    </div>
  );
}

export default Transaction;