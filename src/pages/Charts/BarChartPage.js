import React from "react";
import BarChart from "../../components/graphs/Barchart";

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
    // datasets: [

    datasets: [
      {
        label: "Expenses ($)",
        data: [500, 700, 400, 650, 800, 300, 450, 900, 1000, 750, 600, 400],
        backgroundColor: "#c0bec2",
        // borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        tension: 0.4, // Smooth the line
        pointRadius: 5, // Points on the line
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Expenses for 2024", // Chart title
        font: {
          size: 16,
        },
      },
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
          text: "Months", // X-axis title
        },
        grid: {
          display: false, // Remove grid lines on x-axis
        },
        ticks: {
          // Ensure labels are straight (horizontal)
          autoSkip: false, // Avoid skipping labels
          maxRotation: 0, // Prevent label rotation
          minRotation: 0, // Prevent label rotation
        },
      },
      y: {
        title: {
          display: true,
          text: "Expenses ($)", // Y-axis title
        },
        grid: {
          display: false, // Remove grid lines on y-axis
        },
      },
    },
  };
  return (
    <div className="mt-3  min-w-full">
      <h2 className="text-lg  font-bold text-center mb-1">Monthly Expenses</h2>

      <BarChart data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChartPage;
