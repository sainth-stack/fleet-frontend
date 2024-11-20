// src/components/graphs/WaveGraph.js

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WaveGraph = ({
  title = "Trips by Month", // Title of the graph
  xAxisTitle = "Months", // X-axis title
  yAxisTitle = "Percentage of Trips", // Y-axis title
}) => {
  // Sample data representing percentages of trips by month
  const generatePercentageData = () => {
    return [
      90,
      10,
      80,
      30,
      5,
      35,
      90,
      10,
      32,
      6,
      50,
      5, // percentages of trips for each month
    ];
  };

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels (months)
    datasets: [
      {
        label: "Trips by Month",
        data: generatePercentageData(), // Y-axis values (percentage of trips)
        borderColor: "red", // Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Background color
        fill: true, // Fill under the line to create the wave effect
        tension: 0.4, // Smooth the line
            pointRadius: 0,
            // Points on the line
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 17,
        },
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
        },

       
      },
    },
  };

  return (
    <div className="min-w-96 mt-3 p-3 bg-white rounded-lg shadow-md">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default WaveGraph;
