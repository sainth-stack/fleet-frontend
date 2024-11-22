import React from "react";
import BarChart from "../../components/graphs/Barchart";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

const BarChartPage = () => {
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
    ],
    datasets: [
      {
        label: "Expenses",
        data: [500, 700, 400, 650, 800, 300, 450, 900, 1000, 750, 600, 400],
        backgroundColor: "#c0bec2",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Expenses by Month", // Chart title
        font: {
          size: 16,
        },
        position: "top", // Position the title at the top
        align: "start",
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        display: true, // Show the data labels by default
        color: "black", // Set the color of the labels
        font: {
          weight: "300",
          size: 10,
        },
        formatter: (value) => value.toFixed(0), // Format the value to 2 decimal places
        anchor: "end", // Place the label at the end of the bar
        align: "top", // Align the label to the top of the bar
      },
    },
    scales: {
      x: {
        
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
       display: false,
        grid: {
          display: false,
        },
      },
      plugins: [ChartDataLabels], // Register the plugin
    },
  };

  return (
    <div className="mt-3 min-w-full ">
      <BarChart data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChartPage;
