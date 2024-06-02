
import Cards from 'container/Cards/Cards';
import React from 'react';
import MonthlyReports from 'container/MonthlyReports/MonthlyReports';
import Chart from 'components/other/Chart';
import Investments from 'container/Investments/Investments';
import Transactions from 'container/Transactions/Transactions';

import "./styles/Dashboard.css"

import FastPayments from 'container/FastPayments/FastPayments';


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

        <FastPayments />

        <Chart />


      </section >



      <section className="right">

        <Investments></Investments>

        <Transactions></Transactions>

      </section >




    </>


  );
}

export default Dashboard;