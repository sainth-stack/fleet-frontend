import React from "react";
import MultiBarChart from "../../components/graphs/MultiBarChart";

const VerticalMultiGraph = () => {
  const chartData = {
    labels: ["Woodchip", "Woodpalet"], // Y-axis categories (Cargo types)
    datasets: [
      {
        label: "Cargo Type A", // Dataset for first color
        data: [10, 5], // Data for woodchip and woodpalet
        backgroundColor: "red", // Red color for the first dataset
      },
      {
        label: "Cargo Type B", // Dataset for second color
        data: [15, 8], // Data for woodchip and woodpalet
        backgroundColor: "darkblue", // Deep blue color for the second dataset
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y", // Make the bars horizontal by switching axes
    responsive: true,
    plugins: {
     
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Quantity", // X-axis title
        },
        ticks: {
          stepSize: 5, // Set tick step size to 5 (0, 5, 10, etc.)
        },
      },
      y: {
        title: {
          display: true,
          text: "Cargo Types", // Y-axis title
        },
      },
    },
  };

    return (
      <>
        <h2 className="text-center text-lg font-bold mb-1">
          Cargo Types Bar Chart
        </h2>
        <div className="my-2  mx-auto rounded-md shadow-sm h-44 mb-2 flex justify-center overflow-auto">
          <MultiBarChart data={chartData} options={chartOptions} />
        </div>
      </>
    );};

export default VerticalMultiGraph;
