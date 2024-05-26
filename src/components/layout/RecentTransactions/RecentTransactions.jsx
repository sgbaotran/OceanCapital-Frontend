import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/common/Transaction';

import './RecentTransactions.css'
function RecentTransactions() {
  return (
    <div class="recent-transactions">

      <div class="header">
        <h2>Recent Transaction</h2>
        <NavLink to="/transaction">more<span class="material-icons-sharp">chevron_right</span></NavLink>
      </div>

      <Transaction></Transaction>

    </div>
  );
}

export default RecentTransactions;