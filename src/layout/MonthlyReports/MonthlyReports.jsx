import React from 'react';
import './MonthlyReport.css'
import Report from 'components/UI/Report';


function MonthlyReports(props) {
  const reportDatas = [
    { title: "Income", amount: 10000, isGain: true, diffPercentage: 10 },
    { title: "Expense", amount: 1300, isGain: true, diffPercentage: 20 },
    { title: "Income", amount: 10000, isGain: true, diffPercentage: 10 },
    { title: "Income", amount: 10000, isGain: true, diffPercentage: 10 },
  ]

  return (
    <div className="monthly-report">
      {reportDatas.map(report => (
        <Report title={report.title} amount={report.amount} isGain={report.isGain} diffPercentage={report.diffPercentage} />
      ))}
    </div>
  );
}

export default MonthlyReports;