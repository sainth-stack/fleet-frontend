import React from "react";
import WaveGraph from "../../components/graphs/WaveGraph"; // Import the WaveGraph component

const WaveGraphPage = () => {
  // Example datasets for multiple waves
 const datasets = [
   {
     label: "Wave 1 - Trips by Month",
     data: [90, 10, 80, 30, 5, 35, 90, 10, 32, 6, 50, 5],
     borderColor: "red",
     backgroundColor: "rgba(54, 162, 235, 0.2)",
     fill: true,
     tension: 0.4,
     pointRadius: 0,
   },
   {
     label: "Wave 2 - Trips by Month",
     // Offset this dataset's values by adding a constant (e.g., 20)
     data: [110, 30, 100, 50, 25, 55, 115, 32, 55, 18, 70, 25],
     borderColor: "green",
     backgroundColor: "rgba(75, 192, 192, 0.2)",
     fill: true,
     tension: 0.4,
     pointRadius: 0,
   },
 ];


  return (
    <div className="mt-3 min-w-full">
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
