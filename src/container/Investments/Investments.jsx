import React from 'react';
import './Investments.css'
import Investment from 'components/ui/Investment';
import { NavLink } from 'react-router-dom';
import { INVESTMENT_DATAS } from 'test/model';

function Investments(props) {


  return (
    <div className="investments">

      <div className="header">
        <h1>Investments</h1>
        <NavLink to="/analytic">More <span className="material-icons-sharp">chevron_right</span></NavLink>
      </div>

      {
        INVESTMENT_DATAS.map(investment => (
          <Investment key={investment.title} {...investment} />

        ))
      }


    </div>
  );
}

export default Investments;