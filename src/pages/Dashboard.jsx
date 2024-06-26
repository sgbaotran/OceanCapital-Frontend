
import CardContainer from 'container/Cards/Cards';
import React from 'react';
import MonthlyReportContainer from 'container/MonthlyReports/MonthlyReports';
import Chart from 'components/other/Chart';
import InvestmentContainer from 'container/Investments/Investments';
import TransactionContainer from 'container/Transactions/Transactions';

import "./styles/Dashboard.css"

import GroupContainer from 'container/Groups/Groups';
import { useSelector } from 'react-redux';


function Dashboard() {


  const firstName = useSelector((state) => (state.app.firstName))

  return (
    <>


      <section className="middle">


        <div className="header">
          <h1>Hello, {firstName} </h1>
          <input type="date" />
        </div>


        <CardContainer />

        <MonthlyReportContainer />

        <GroupContainer />

        <Chart />


      </section >



      <section className="right">

        <InvestmentContainer></InvestmentContainer>

        <TransactionContainer></TransactionContainer>

      </section >




    </>


  );
}

export default Dashboard;