import React, { useState } from "react";
import PieChart from "../../components/graphs/DoughnutChart";
import { tableData } from "../../data/TableData";

const PieChartPage = () => {
  

  // Grouping the data by busType and counting the occurrences
  const groupedData = tableData.reduce((acc, curr) => {
    acc[curr.busType] = (acc[curr.busType] || 0) + 1; // Count occurrences of each busType
    return acc;
  }, {});

  // Prepare data for the chart (using the count of each busType)
  const initialData = {
    labels: Object.keys(groupedData), // busType values
    datasets: [
      {
        data: Object.values(groupedData), // Count of each busType
        backgroundColor: [
          "#FF6B6B", // Warm Red
          "#4CAF50", // Distinct Green
          "#87CEEB", // Sky Blue
          "#FF9800", // Orange, add more if needed
        ],
        borderWidth: 1, // Border around the sectors
      },
    ],
  };

  // State to track visibility of each dataset item
  const [visibility, setVisibility] = useState(
    new Array(initialData.labels.length).fill(true)
  );

  // Create a filtered version of the chart data based on visibility
  const chartData = {
    ...initialData,
    datasets: [
      {
        ...initialData.datasets[0],
        data: initialData.datasets[0].data.map((value, index) =>
          visibility[index] ? value : 0
        ), // Only include data of visible sections
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Bus Type Count",
      },
      legend: {
        display: false, // Disabling default legend to create a custom one
      },
      datalabels: {
        display: false, // Show the data labels by default
        color: "black", // Set the color of the labels
        font: {
          weight: "300",
          size: 10,
        },
        formatter: (value) => value.toFixed(0), // Format the value to 0 decimal places
        anchor: "end", // Place the label at the end of the bar
        align: "top", // Align the label to the top of the bar
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  // Toggle the visibility of a chart section
  const toggleVisibility = (index) => {
    setVisibility((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <>
      <h2 className="text-lg font-bold text-center mb-1">Bus Type Count</h2>
      <div className="flex justify-center items-start gap-6 px-1">
        {/* Pie Chart */}
        <div className="my-2 w-44 rounded-md shadow-sm h-44 flex justify-center">
          <PieChart data={chartData} options={chartOptions} />
        </div>

        {/* Custom Legend */}
        <div className="flex flex-col justify-center items-start">
          {initialData.labels.map((label, index) => (
            <div
              key={index}
              className="flex items-center gap-2 my-4 cursor-pointer"
              onClick={() => toggleVisibility(index)} // Toggle visibility on click
            >
              {/* Legend Color Indicator */}
              <span
                className="w-4 h-4 "
                style={{
                  backgroundColor: visibility[index]
                    ? initialData.datasets[0].backgroundColor[index]
                    : "#ccc", // Gray out when hidden
                }}
              ></span>
              {/* Label and Count */}
              <span
                className={`text-sm font-medium ${
                  visibility[index] ? "text-black" : "text-gray-400"
                }`}
              >
                {`${label}: ${
                  visibility[index] ? initialData.datasets[0].data[index] : 0
                }`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartPage;
