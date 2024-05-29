import React from 'react';
import { NavLink } from 'react-router-dom';
import Transaction from 'components/ui/Transaction';
import './RecentTransactions.css'
import { TRANSACTION_DATAS } from 'test/model';

function RecentTransactions() {
  return (
    <div className="recent-transactions">

      <div className="header">
        <h2>Recent Transaction</h2>
        <NavLink to="/transaction">more<span className="material-icons-sharp">chevron_right</span></NavLink>
      </div>
      {

        TRANSACTION_DATAS.map(transaction => <Transaction key={transaction.title}{...transaction} />)
      }

    </div>
  );
}

export default RecentTransactions;