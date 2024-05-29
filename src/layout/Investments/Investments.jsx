import React from 'react';
import './Investments.css'
import Investment from 'components/ui/Investment';
import { NavLink } from 'react-router-dom';

function Investments(props) {

  const investmentData = [
    { title: "Tesla" },
    { title: "Meta" }
  ]
  return (
    <div className="investments">

      <div className="header">
        <h1>Investments</h1>
        <NavLink to="/analytic">More <span className="material-icons-sharp">chevron_right</span></NavLink>
      </div>

      {
        investmentData.map(investment => (
          <Investment key={ investment.title} title={investment.title}></Investment>

        ))
      }


    </div>
  );
}

export default Investments;