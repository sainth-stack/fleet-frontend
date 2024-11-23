import React from "react";

const Leaderboard = ({ data }) => {
  const sortedData = [...data].sort(
    (a, b) => a.fuelConsumption - b.fuelConsumption
  );

  const top5Data = sortedData.slice(0, 5);
  return (
    <div className="p-3 max-w-xl mb-3  mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-start text-lg font-semibold text-gray-800 mb-6">
        Top Leaderboard
      </h2>
      <div className="space-y-2 ">
        {top5Data.length > 0 ? (
          top5Data.map((trip, index) => (
            <div
              key={trip.id}
              className="flex   p-3 bg-white rounded-lg shadow-md"
            >
              <div className="text-xl mx-3  font-bold text-blue-600">
                {index + 1}
              </div>
              <div className="text-lg  text-gray-700 flex-1">{trip.driver}</div>
              <div className="text-lg  text-green-600 text-right">
                {trip.fuelConsumption} L
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
