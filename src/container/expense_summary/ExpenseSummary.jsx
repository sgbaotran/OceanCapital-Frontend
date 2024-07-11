import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getTodayDate } from 'utils/other';
import './ExpenseSummary.css';
import DoughnutChart from '../../components/chart/DoughnutChart';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);



function ExpenseSummary() {
  const expenseCategories = useSelector(state => state.app.expense_categories)

  const data = {
    labels: expenseCategories.map(expenseGroup => expenseGroup.title),
    datasets: [
      {
        label: [],
        data: expenseCategories.map(expenseGroup => expenseGroup.amount),
        backgroundColor: expenseCategories.map(expenseGroup => expenseGroup.color),
        borderWidth: 0,
        cutout: '85%',
      },
    ],
 
  };



  return (
    <div className='expense-summary-container'>
      <div className="header">
        <h3>Expenses Summary</h3>
        <input defaultValue={getTodayDate()} type="date" />
      </div>
      <div className='content'>
        <div className='chart'>
          <DoughnutChart className='expense-summary' data={data} />
        </div>
        <ul className='label'>
          {expenseCategories.map((expenseGroup, index) => (
            <li key={index}>
              <div className='title'>{expenseGroup.title}</div>
              <div className='amount'>${expenseGroup.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseSummary;
