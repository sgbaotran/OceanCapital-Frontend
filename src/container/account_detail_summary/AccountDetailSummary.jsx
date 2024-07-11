import React from 'react';
import './AccountDetailSummary.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getTodayDate } from 'utils/other';
import LineChart from '../../components/chart/LineChart';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



function AccountDetailSummary() {

  const earnings = useSelector((state) => (state.app.earnings))

  const spendings = useSelector((state) => (state.app.spendings))

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [earnings,spendings],
  };

  return (
    <div className='account-details-container'>
      <div className="header">
        <h3>Account Details</h3>
        <div>
          <input defaultValue={getTodayDate()} type="date" />
          <span>-</span>
          <input defaultValue={getTodayDate()} type="date" />
        </div>
      </div>
      <div className='chart'>
        <LineChart className='account-details' data={data} />
      </div>
    </div>
  );
}

export default AccountDetailSummary;
