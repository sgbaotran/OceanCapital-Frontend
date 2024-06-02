import React from 'react';
import './Chart.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CHART_DATAS } from 'sample-data/model';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const data = {
  labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: CHART_DATAS,
};

function Chart() {
  return (

    <Line id="chart" data={data} />

  );
}

export default Chart;




