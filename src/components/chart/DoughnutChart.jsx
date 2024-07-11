import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart({ className, data }) {
  
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          // Custom label for the tooltip
          label: function (tooltipItem) {
            const { label, raw } = tooltipItem;
            return `${label}: ${raw}`;
          },
        },
      },
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <Doughnut options={options} className={className} data={data} />
  );
}

export default DoughnutChart;