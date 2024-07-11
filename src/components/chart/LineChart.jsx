import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ className, data }) {
  return (
    <Line className={className} data={data} />



  );
}

export default LineChart;