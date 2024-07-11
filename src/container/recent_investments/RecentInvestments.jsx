import React from 'react';
import './RecentInvestments.css'
import Investment from 'components/common/Investment';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RecentInvestments({ showLink = false }) {
  const investments = useSelector(state => state.app.investments)


  return (
    <div className="investments-container">

      <div className="header">
        <h3>Investments</h3>
        {showLink ? <NavLink to="/analytic">See all</NavLink> : undefined}
      </div>

      {
        investments.map(investment => (
          <Investment key={investment.title} {...investment} />

        ))
      }


    </div>
  );
}

export default RecentInvestments;