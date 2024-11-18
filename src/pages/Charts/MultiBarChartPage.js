import React from "react";
import MultiBarChart from "../../components/graphs/MultiBarChart";

const MultiBarChartPage = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May",], // Months or categories for X-axis
    datasets: [
      {
        label: "Category 1",
        data: [65, 59, 80, 81, 56], // Data for Category 1
        backgroundColor: "black", // Color of Category 1 bars
        borderColor: "black", // Border color of Category 1 bars
        borderWidth: 1,
      },
      {
        label: "Category 2",
        data: [35, 49, 60, 71, 46], // Data for Category 2
        backgroundColor: "yellow", // Color of Category 2 bars
        borderColor: "yellow", // Border color of Category 2 bars
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Comparison", // Chart Title
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            let value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // X-axis title
        },
        grid: {
          display: false, // Disable grid lines on x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales ($)", // Y-axis title
        },
        grid: {
          display: true, // Show grid lines on y-axis
        },
      },
    },
  };

  return (
    <div className="my-2   shadow-sm mx-3 rounded-md  overflow-auto">
      <h2 className="text-lg font-bold text-center mb-1">
        Sales Data Comparison
      </h2>
      <MultiBarChart data={chartData} options={chartOptions} />
    </div>
  );
};

export default MultiBarChartPage;
