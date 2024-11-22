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
import ChartDataLabels from "chartjs-plugin-datalabels"; // Plugin for displaying data labels

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the datalabels plugin
);

const WaveGraph = ({
  title = "Trips by Month", // Title of the graph
  xAxisTitle = "Months", // X-axis title
  yAxisTitle = "Percentage of Trips", // Y-axis title
  datasets = [], // Data for multiple waves
}) => {
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
    datasets: datasets, // Use the datasets passed as props
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
        position: "top", // Position the title at the top
        align: "start", // Align title to start (left)
      },
      legend: {
        display: true,
      },
      datalabels: {
        display: true, // Show the data labels
        color: "black", // Color of the labels
        font: {
          weight: "bold",
          size: 12,
        },
        anchor: "end", // Anchor at the end of the point
        align: "top", // Align labels at the top of the point
        formatter: (value) => `${value}%`, // Format the value with "%"
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
        display: true,
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
