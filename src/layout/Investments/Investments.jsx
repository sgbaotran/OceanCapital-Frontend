import React from 'react';
import './Investments.css'
import Investment from 'components/UI/Investment';
import { NavLink } from 'react-router-dom';

function Investments(props) {

  const investmentData = [
    { title: "Tesla" },
    { title: "Tesla" }
  ]
  return (
    <div className="investments">

      <div className="header">
        <h1>Investments</h1>
        <NavLink to="/analytic">More <span className="material-icons-sharp">chevron_right</span></NavLink>
      </div>

      {
        investmentData.map(investment => (
          <Investment title={investment.title}></Investment>

        ))
      }


    </div>
  );
}

export default Investments;