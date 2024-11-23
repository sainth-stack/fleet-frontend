import React, { useEffect, useState } from "react";
import MultiBarChart from "../../components/graphs/MultiBarChart";
import { tableData } from "../../data/TableData";

// Assuming tableData is an array of objects with `busCapacity` and `busOccupancy`
const VerticalMultiGraph = () => {
  const [chartData, setChartData] = useState({
    labels: ["Bus Capacity", "Bus Occupancy"], // Y-axis categories
    datasets: [
      {
        label: "Bus Capacity", // Label for the first dataset
        data: [0, 0], // Placeholder data for Bus Capacity
        backgroundColor: "red", // Red color for Bus Capacity
      },
      {
        label: "Bus Occupancy", // Label for the second dataset
        data: [0, 0], // Placeholder data for Bus Occupancy
        backgroundColor: "darkblue", // Blue color for Bus Occupancy
      },
    ],
  });

  // UseEffect to process tableData and update chartData
  useEffect(() => {
    if (tableData && tableData.length > 0) {
      let busCapacityTotal = 0;
      let busOccupancyTotal = 0;

      // Calculate totals for Bus Capacity and Bus Occupancy
      tableData.forEach((item) => {
        busCapacityTotal += item.busCapacity || 0;
        busOccupancyTotal += item.busOccupancy || 0;
      });

      // Set the new chart data
      setChartData({
        labels: ["Bus Capacity", "Bus Occupancy"], // Labels for the Y-axis
        datasets: [
          {
            label: "Bus Capacity", // Red bars for Bus Capacity
            data: [busCapacityTotal, 0], // Data for Bus Capacity
            backgroundColor: "red",
          },
          {
            label: "Bus Occupancy", // Blue bars for Bus Occupancy
            data: [0, busOccupancyTotal], // Data for Bus Occupancy
            backgroundColor: "darkblue",
          },
        ],
      });
    }
  }, [tableData]); // Re-run when tableData changes

  // Chart options
  const chartOptions = {
    indexAxis: "y",
    barThickness: 20, // Bar width
    offset: true, // Center the bars in the chart
    min: 0, // Start from zero
    ticks: {
      padding: 10, // Add some padding for better visualization
    },
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        font: {
          weight: "300",
          size: 10,
        },
      },
      title: {
        display: true,
        text: "Bus Capacity vs Bus Occupancy", // Chart title
        font: {
          size: 12,
        },
        position: "top",
        align: "center",
      },
      legend: {
        display: false,
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
          display: false,
          text: "Quantity", // X-axis title
        },
        ticks: {
          stepSize: 5, // Set tick step size
        },
      },
      y: {
        title: {
          display: false,
          text: "Cargo Types", // Y-axis title
        },
        grid: {
          display: false,
        },
      },
    },
    layout: {
      
    },
  };

  return (
    <>
      <div className="my-2 mx-auto rounded-md min-h-48 mb-2 flex justify-center overflow-auto px-1">
        <MultiBarChart data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default VerticalMultiGraph;
