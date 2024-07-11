
import React from 'react';
import Cards from 'container/cards/Cards';

import RecentInvestments from 'container/recent_investments/RecentInvestments';
import RecentTransactions from 'container/recent_transactions/RecentTransactions';

import "./Dashboard.css"
import ExpenseSummary from 'container/expense_summary/ExpenseSummary';
import AccountDetailSummary from 'container/account_detail_summary/AccountDetailSummary';
import PortfolioSummary from 'container/portfolio_summary/PortfolioSummary';



function Dashboard() {




  return (
    <>

      <section className="middle">

   
        <Cards />

        <PortfolioSummary />

        <AccountDetailSummary />

      </section >



      <section className="right">
        <ExpenseSummary />

        <RecentInvestments showLink={true} />

        <RecentTransactions showLink={true} />

      </section >




    </>


  );
}

export default Dashboard;