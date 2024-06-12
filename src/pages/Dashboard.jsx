
import CardContainer from 'container/Cards/Cards';
import React, { useContext } from 'react';
import MonthlyReportContainer from 'container/MonthlyReports/MonthlyReports';
import Chart from 'components/other/Chart';
import InvestmentContainer from 'container/Investments/Investments';
import TransactionContainer from 'container/Transactions/Transactions';

import "./styles/Dashboard.css"

import GroupContainer from 'container/Groups/Groups';
import { UserContext } from 'store/user-context';


function Dashboard() {
  const { firstName } = useContext(UserContext)


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