import React from "react";
import PieChart from "../../components/graphs/DoughnutChart";


const PieChartPage = () => {
  const chartData = {
    labels: ["Close ", "Regular ", "Far"], // Labels for the sectors
    datasets: [
      {
        data: [40, 25, 20, 100], // Percentage values for each sector
        backgroundColor: [
          "#454547",
          "#a7a5a8",
          "#c0bec2",
          "#817f82",
          "#ecebed",
        ], // Colors for each sector
        borderWidth: 1, // Border around the sectors
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Pie Chart Example",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <>
      <h2 className="text-lg font-bold text-center mb-1">Sales Distribution</h2>
      <div className="my-2 w-52 mx-auto rounded-md shadow-sm h-44 mb-2 flex justify-center overflow-auto">
        <PieChart data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default PieChartPage;
