import React from 'react';
import './MonthlyReport.css'
import Report from 'components/other/Report';
import { REPORT_DATAS } from 'sample-data/model';


function MonthlyReports(props) {


  return (
    <div className="monthly-report-container">
      {REPORT_DATAS.map(report => (
        <Report key={report.title} {...report} />
      ))}
    </div>
  );
}

export default MonthlyReports;