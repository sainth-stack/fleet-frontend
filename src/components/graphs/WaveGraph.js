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
  title = "Bus Capacity va Bus Occupancy", // Title of the graph
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
         size: 12,
       },
       position: "top", // Position the title at the top
       align: "start", // Align title to the left
     },
     legend: {
       display: false, // Hide the legend
     },
     tooltip: {
       enabled: true, // Ensure tooltips are enabled
       mode: "nearest", // Display tooltip for the nearest data point
       intersect: false, // Tooltip should trigger when hovering over the area of the chart, not directly on data points
       callbacks: {
         label: (tooltipItem) => {
           const label = tooltipItem.dataset.label || ""; // Access dataset label (if present)
           const value =
             tooltipItem.raw ||
             tooltipItem.formattedValue ||
             tooltipItem.parsed.y; // Access value (depending on the chart type and tooltip config)
           return `${label}: ${value}`; // Format the tooltip with the label and value
         },
       },
       backgroundColor: "rgba(0,0,0,0.7)", // Customize the tooltip background color
       titleFont: {
         size: 14,
       },
       bodyFont: {
         size: 12,
       },
     },
     datalabels: {
       display: true, // Show data labels
       color: "black", // Label color
       font: {
         weight: "300",
         size: 12,
       },
       anchor: "center", // Anchor at the center of the point
       align: "top", // Align labels at the top of the point
       formatter: (value) => `${value}%`, // Format the value with "%"
     },
   },
   hover: {
     mode: "nearest", // Highlight the nearest point
     intersect: false, // Trigger hover even when not exactly on a data point
   },
   scales: {
     x: {
       title: {
         display: false,
         text: xAxisTitle,
       },
       grid: {
         display: false,
       },
     },
     y: {
       display: false, // Show the Y axis
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
