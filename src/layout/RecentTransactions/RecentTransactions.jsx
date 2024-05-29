import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/ui/Transaction';

import './RecentTransactions.css'
function RecentTransactions() {
  return (
    <div className="recent-transactions">

      <div className="header">
        <h2>Recent Transaction</h2>
        <NavLink to="/transaction">more<span className="material-icons-sharp">chevron_right</span></NavLink>
      </div>

      <Transaction></Transaction>

    </div>
  );
}

export default RecentTransactions;