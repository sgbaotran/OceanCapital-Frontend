
import Cards from 'layout/Cards/Cards';
import React from 'react';
import MonthlyReports from 'layout/MonthlyReports/MonthlyReports';
import Chart from 'components/UI/Chart';
import Investments from 'layout/Investments/Investments';
import RecentTransactions from 'layout/RecentTransactions/RecentTransactions';
import "./styles/Dashboard.css"

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