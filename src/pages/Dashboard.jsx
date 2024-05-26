
import Cards from 'components/layout/Cards/Cards';
import React from 'react';
import "./styles/Dashboard.css"
import MonthlyReports from 'components/layout/MonthlyReports/MonthlyReports';
import Chart from 'components/common/Chart';
import Investments from 'components/layout/Investments/Investments';
import RecentTransactions from 'components/layout/RecentTransactions/RecentTransactions';

function Dashboard() {
  return (
    <>
      <section className="middle">

        <div className="header">
          <h1>Hello, Stephen Tran</h1>
          <input type="date" />
        </div>


        <Cards />

        <MonthlyReports />

        <Chart />

      </section >



      <section className="right">
        <Investments></Investments>
        <RecentTransactions></RecentTransactions>
      </section >

    </>


  );
}

export default Dashboard;