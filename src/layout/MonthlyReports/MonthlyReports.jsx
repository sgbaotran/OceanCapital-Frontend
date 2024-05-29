import React from 'react';
import './MonthlyReport.css'
import Report from 'components/ui/Report';


function MonthlyReports(props) {
  const reportDatas = [
    { title: "Income", amount: 10000, isGain: true, diffPercentage: 10 },
    { title: "Expense", amount: 1300, isGain: true, diffPercentage: 20 },
    { title: "Gift", amount: 10000, isGain: false, diffPercentage: 10 },

  ]

  return (
    <div className="monthly-report">
      {reportDatas.map(report => (
        <Report key={report.title} title={report.title} amount={report.amount} isGain={report.isGain} diffPercentage={report.diffPercentage} />
      ))}
    </div>
  );
}

export default MonthlyReports;