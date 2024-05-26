
import Cards from 'components/layout/Cards/Cards';
import React from 'react';
import "./styles/Dashboard.css"
import MonthlyReports from 'components/layout/MonthlyReports/MonthlyReports';
import Chart from 'components/common/Chart';
import Investments from 'components/layout/Investments/Investments';

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
      </section >

    </>


  );
}

export default Dashboard;