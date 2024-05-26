import React from 'react';
import './Investment.css'

function Invesment({ title }) {
  return (
    <div className="investment">
      <img src={require("assets/images/uniliver.png")} alt="" />
      <h4 className="">{title}</h4>
      <div className="date-time">
        <p>2 Dec, 2021</p>
        <small className="text-muted">9:14pm</small>
      </div>
      <div className="bonds">
        <p>11</p>
        <small className="text-muted">Bonds</small>
      </div>
      <div className="amount">
        <h4>$20.033</h4>
        <small className="success">+4,27%</small>
      </div>
    </div>
  );
}

export default Invesment;