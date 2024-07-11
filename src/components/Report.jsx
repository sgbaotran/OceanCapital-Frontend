import React from 'react';
import './Report.css';

function Report({ title, amount, isGain, diffPercentage, date }) {

  // Determine status class based on isGain
  let statusClassName = isGain ? "text-success" : "text-danger";
  
  // Determine status symbol based on title and isGain
  let status = isGain ? (title === 'Expense' ? "-" : "+") : (title === 'Expense' ? "+" : "-");

  return (
    <div className="report">
      <h3>{title}</h3>
      <div>
        <details>
          <h1>${amount.toLocaleString()}</h1>
          <h6 className={statusClassName}>{status}{diffPercentage}%</h6>
        </details>
        <p className="text-2">Compared to {date}</p>
      </div>
    </div>
  );
}

export default Report;
