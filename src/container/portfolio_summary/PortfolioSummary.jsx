import React from 'react';
import './PortfolioSummary.css'
import Report from 'components/Report';
import { useSelector } from 'react-redux';


function PortfolioSummary(props) {
  const reports = useSelector(state => state.app.portfolio)


  return (
    <div className="portfolio-report-container">
      {reports.map(report => (
        <Report key={report.title} {...report} />
      ))}
    </div>
  );
}

export default PortfolioSummary;