import React, { useEffect, useState } from "react";
import BarChart from "../../components/graphs/Barchart";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin
import { tableData } from "../../data/TableData";

const BarChartPage = () => {
  const parseCurrency = (value) =>
    value ? +value.replace(/[₹,]/g, "").trim() : 0;

  const [chartData, setChartData] = useState({
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
        data: Array(12).fill(0), // Initialize with 0s
        backgroundColor: "#0000f2",
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  });

  useEffect(() => {
    // Initialize monthly expenses array
    const monthlyExpenses = Array(12).fill(0);

    // Populate monthly expenses
    for (const { date, fuelCost } of tableData) {
      const monthIndex = new Date(date).getMonth(); // 0-11 index for the month
      monthlyExpenses[monthIndex] += parseCurrency(fuelCost);
    }

    // Update chart data with new monthly expenses
    setChartData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: monthlyExpenses,
        },
      ],
    }));
  }, [tableData]);


  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Expenses by Month", // Chart title
        font: {
          size: 12,
        },
        position: "top", // Position the title at the top
        align: "start",
      },
      legend: {
        display:false,
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
