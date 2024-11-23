import React, { useEffect, useState } from "react";
import WaveGraph from "../../components/graphs/WaveGraph"; // Import the WaveGraph component
import { tableData } from "../../data/TableData";

const WaveGraphPage = () => {
  const [busCapacityData, setBusCapacityData] = useState([]); // State for busCapacity
  const [busOccupancyData, setBusOccupancyData] = useState([]); // State for busOccupancy

  useEffect(() => {
    // Extract busCapacity and busOccupancy from table data
    const capacityData = tableData.map(({ busCapacity }) => busCapacity); // Get all busCapacity values
    const occupancyData = tableData.map(({ busOccupancy }) => busOccupancy); // Get all busOccupancy values

    // Update states
    setBusCapacityData(capacityData);
    setBusOccupancyData(occupancyData);
  }, []); // Empt

  const datasets = [
    {
      // label: "Wave 1 - Trips by Month",
      data: busCapacityData,
      borderColor: "red",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.4,
      borderWidth: 4,

      pointRadius: 0,
    },
    {
      // label: "Wave 2 - Trips by Month",
      // Offset this dataset's values by adding a constant (e.g., 20)
      data: busOccupancyData,
      borderColor: "green",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.4,
      borderWidth: 4,
      pointRadius: 0,
    },
  ];

  return (
    <div className="mt-3 min-w-full ">
      <WaveGraph
        title="Bus Capacity va Bus Occupancy"
        xAxisTitle="Months"
        yAxisTitle="Percentage of Trips"
        datasets={datasets} // Pass the datasets here
      />
    </div>
  );
};

export default WaveGraphPage;
