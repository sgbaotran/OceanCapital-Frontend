import React from 'react';
import './MonthlyReport.css'
import Report from 'components/ui/Report';
import { REPORT_DATAS } from 'test/model';


function MonthlyReports(props) {


  return (
    <div className="monthly-report">
      {REPORT_DATAS.map(report => (
        <Report key={report.title} {...report} />
      ))}
    </div>
  );
}

export default MonthlyReports;