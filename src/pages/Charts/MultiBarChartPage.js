import React from "react";
import MultiBarChart from "../../components/graphs/MultiBarChart";
import { tableData } from "../../data/TableData";

const MultiBarChartPage = () => {
  // Prepare the chart data by grouping the distance traveled by driver
  const driverNames = [...new Set(tableData.map((item) => item.driver))]; // Unique drivers
  const distances = driverNames.map((driver) => {
    return tableData
      .filter((item) => item.driver === driver)
      .reduce((sum, item) => sum + item.distance, 0); // Total distance by each driver
  });


  const driverData = driverNames.map((driver, index) => ({
    driver,
    distance: distances[index],
  }));

  // Sort the data by distance in descending order
  driverData.sort((a, b) => b.distance - a.distance);

  // After sorting, extract the sorted names and distances
  const sortedDriverNames = driverData.map((data) => data.driver);
  const sortedDistances = driverData.map((data) => data.distance);


  const chartData = {
    labels: sortedDriverNames, // Driver names for Y-axis
    datasets: [
      {
        label: "Distance Traveled (km)", // Label for the dataset
        data: sortedDistances, // Total distance for each driver
        backgroundColor: "blue", // Bar color for all drivers
        borderColor: "blue", // Border color for bars
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    indexAxis: "y", // This makes the bars horizontal
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        position: "top", // Position the title at the top
        align: "start",
        text: "Total Distance Traveled by Driver", // Chart Title
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            let value = context.raw || 0;
            return `${label}: ${value} km`;
          },
        },
      },
      // Add datalabels plugin to control the value labels
      datalabels: {
        color: "white", // Change text color of the values (you can use any color here)
        font: {
          size: 12, // Adjust font size of the values
          weight: "bold", // Adjust font weight of the values
        },
        align: "center", // Position of the value labels
        anchor: "center", // Positioning the labels inside the bars
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Distance (km)",
          font: {
            size: 14, // Adjust font size for readability
          },
        },
        grid: {
          display: false, // Show grid lines on x-axis
        },
      },
      y: {
        title: {
          display: false,
          text: "Driver", // Y-axis title (representing drivers)
        },
        grid: {
          display: false, // Disable grid lines on y-axis
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 3,
        borderColor: "blue",
        backgroundColor: "blue",
        barThickness: 40, // Increase this value to make the bars taller
      },
    },
  };


  return (
    <div className="mt-3 min-w-full">
      <div className="overflow-y-scroll max-h-[250px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        <div className="min-w-[800px]">
          <MultiBarChart data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MultiBarChartPage;
