import React from 'react';

function Report({ title, amount, isGain, diffPercentage, date }) {

  let statusClassName = isGain ? "success" : "danger"
  let status

  if (title === 'Expense') {
    status = isGain ? "-" : "+"
  } else {
    status = isGain ? "+" : "-"
  }

  return (

    <div className="report">
      <h3>{title}</h3>
      <div>
        <details>
          <h1>${amount.toLocaleString()}</h1>
          <h6 className={statusClassName}>{status}{diffPercentage}%</h6>
        </details>
        <p className="text-muted">Compared to {date}</p>
      </div>
    </div>

  );
}

export default Report;