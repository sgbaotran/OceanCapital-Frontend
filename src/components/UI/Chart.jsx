import React from 'react';
import './Chart.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522, 12345, 12345, 16623, 14522],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Spending',
      data: [13861, 11090, 19545, 10974, 15342, 16566, 19695, 12285, 14180, 12585, 12842, 17811],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

function Chart(props) {
  return (

    <Line id="chart" data={data} />


  );
}

export default Chart;




