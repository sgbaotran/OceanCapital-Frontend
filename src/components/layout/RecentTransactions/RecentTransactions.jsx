import React from 'react';
import { NavLink } from 'react-router-dom';
import './RecentTransactions.css'
function RecentTransactions() {
  return (
    <div class="recent-transactions">
      <div class="header">
        <h2>Recent Transaction</h2>
        <NavLink href="">more<span class="material-icons-sharp">chevron_right</span></NavLink>
      </div>

    </div>
  );
}

export default RecentTransactions;