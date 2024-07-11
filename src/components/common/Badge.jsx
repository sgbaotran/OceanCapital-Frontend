import React from 'react';
import './Badge.css'
function Badge({ title, amount }) {
  return (

    <div className="badge">
      <span className="bg-primary"></span>
      <div>
        <h5>{title}</h5>
        <h4>${amount}</h4>
      </div>
    </div>
  );
}

export default Badge;
