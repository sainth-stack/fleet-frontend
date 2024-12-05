import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary components with Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const MultiBarChart = ({ data, options }) => {
  return (
    <>
      <div className="min-w-96 mt-3 p-3   bg-white rounded-lg shadow-md">
        <Bar data={data} options={options} />
      </div>
    </>
  );
  
};

export default MultiBarChart;
